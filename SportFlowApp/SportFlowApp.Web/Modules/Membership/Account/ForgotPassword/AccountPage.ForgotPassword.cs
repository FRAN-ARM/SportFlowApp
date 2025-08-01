﻿
namespace SportFlowApp.Membership.Pages
{
    using Administration.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.IO;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Security;

    public partial class AccountController : Controller
    {
        [HttpGet]
        public ActionResult ForgotPassword()
        {
            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.ForgotPassword.AccountForgotPassword_AdminLTE);
            else
                return View(MVC.Views.Membership.Account.ForgotPassword.AccountForgotPassword);
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> ForgotPassword(ForgotPasswordRequest request)
        {
            return this.UseConnection("SportFlow", connection =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Email))
                    throw new ArgumentNullException("email");

                var user = connection.TryFirst<UserRow>(UserRow.Fields.Email == request.Email);
                if (user == null)
                    throw new ValidationError("CantFindUserWithEmail", Texts.Validation.CantFindUserWithEmail);

                byte[] bytes;
                using (var ms = new MemoryStream())
                using (var bw = new BinaryWriter(ms))
                {
                    bw.Write(DateTime.UtcNow.AddHours(3).ToBinary());
                    bw.Write(user.UserId.Value);
                    bw.Flush();
                    bytes = ms.ToArray();
                }

                var token = Convert.ToBase64String(MachineKey.Protect(bytes, "ResetPassword"));

                var externalUrl = Config.Get<EnvironmentSettings>().SiteExternalUrl ??
                    Request.Url.GetLeftPart(UriPartial.Authority) + VirtualPathUtility.ToAbsolute("~/");

                var resetLink = UriHelper.Combine(externalUrl, "Account/ResetPassword?t=");
                resetLink = resetLink + Uri.EscapeDataString(token);

                var emailModel = new ResetPasswordEmailModel();
                emailModel.Username = user.Username;
                emailModel.DisplayName = user.DisplayName;
                emailModel.ResetLink = resetLink;

                var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
                var emailBody = TemplateHelper.RenderTemplate(
                    MVC.Views.Membership.Account.ResetPassword.AccountResetPasswordEmail, emailModel);

                Common.EmailHelper.Send(emailSubject, emailBody, user.Email);

                return new ServiceResponse();
            });
        }
    }
}
