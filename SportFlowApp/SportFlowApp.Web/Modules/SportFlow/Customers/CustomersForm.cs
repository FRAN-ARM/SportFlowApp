
namespace SportFlowApp.SportFlow.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SportFlow.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow), CheckNames = true)]
    public class CustomersForm
    {
        [Category("Datos")]
        [Required, DisplayName("Nombre de Usuario"), MaxLength(100)]
        public String CustomerUsername { get; set; }
        [Required, MaxLength(128)]
        public String CustomerName { get; set; }
        [Required, EmailEditor, DisplayName("Correo")]
        public String UserEmail { get; set; }
        [Required, MaxLength(16)]
        public String CustomerCreditCard { get; set; }
        [Category("")]
        [DisplayName("Fecha"), ReadOnly(true)]
        public DateTime CustomerDateCreated { get; set; }
    }
}