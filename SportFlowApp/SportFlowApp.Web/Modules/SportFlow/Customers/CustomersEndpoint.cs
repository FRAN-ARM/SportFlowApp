
namespace SportFlowApp.SportFlow.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using SportFlowApp.Administration.Entities;
    using SportFlowApp.Administration.Repositories;
    using SportFlowApp.Common.UserRoleAndPermission;
    using SportFlowApp.SportFlow.Entities;
    using SportFlowApp.SportFlow.Forms;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.CustomersRepository;
    using MyRow = Entities.CustomersRow;

    [RoutePrefix("Services/SportFlow/Customers"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CustomersController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<CustomersForm> request)
        {
            var form = request.Entity;

            // Check previo.
            if (string.IsNullOrWhiteSpace(form.CustomerUsername) || string.IsNullOrWhiteSpace(form.CustomerName))
                throw new ArgumentNullException("Debe ingresar texto en los campos faltantes.");

            // Validar la cantidad de caracteres correctos para una tarjeta de credito.
            if (string.IsNullOrWhiteSpace(form.CustomerName) == true)
            {
                var CreditCardLength = form.CustomerCreditCard.Length;
                if ((CreditCardLength >= 15 && CreditCardLength <= 16) == false)
                {
                    throw new ArgumentNullException("Por favor, introduzca un numero correcto para la tarjeta de credito.");
                };
            }

            // Generar hash.
            string salt = null;
            var hash = UserRepository.GenerateHash(form.CustomerUsername + "pass6410", ref salt);

            // Crear e insertar Isuario.
            var user = new UserRow
            {
                Username = form.CustomerUsername.Trim(),
                DisplayName = form.CustomerName.Trim(),
                Email = form.UserEmail?.Trim(),
                Source = "cust",
                PasswordHash = hash,
                PasswordSalt = salt,
                InsertDate = DateTime.UtcNow,
                InsertUserId = 1,
                IsActive = 1
            };
            var userId = (int)uow.Connection.InsertAndGetID(user);

            // Crear e insertar el cliente.
            var customer = new CustomersRow
            {
                CustomerUserId = userId,
                CustomerName = form.CustomerName,
                CustomerCreditCard = form.CustomerCreditCard ?? "",
                CustomerDateCreated = DateTime.UtcNow
            };
            uow.Connection.Insert(customer);

            // Le asignamos al usuario el rol y permiso necesarios.
            UserRoleAndPermissionHelper.AssignRoleAndPermission(uow.Connection, userId, "Customer", "Customer:General");

            return new SaveResponse{EntityId = userId};
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var response = new MyRepository().Update(uow, request);
            var customer = request.Entity;

            // Obtener usuario vinculado y actualizarlo.
            var user = uow.Connection.TryById<UserRow>(customer.CustomerUserId ?? 0);
            if (user != null)
            {
                user.DisplayName = customer.CustomerName;
                user.Email = customer.UserEmail;
                user.UpdateDate = DateTime.UtcNow;
                uow.Connection.UpdateById(user);
            }

            return response;
            //return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            var customer = uow.Connection.TryById<CustomersRow>(request.EntityId);

            // No eliminamos al usuario asociado, ya que no es una practica conveniente. Simplemente se desvincula del cliente.
            if (customer != null && customer.CustomerUserId != null)
            {
                var user = uow.Connection.TryById<UserRow>(customer.CustomerUserId.Value);
                if (user != null)
                {
                    user.IsActive = 0;
                    uow.Connection.UpdateById(user);
                }
            }

            // Ahora si, eliminamos al cliente.
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
