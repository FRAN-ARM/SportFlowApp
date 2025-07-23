
namespace SportFlowApp.SportFlow.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SportFlow.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow), CheckNames = true)]
    public class CustomersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CustomerId { get; set; }
        [EditLink, DisplayName("Nombre de Usuario"), Width(246)]
        public String CustomerUserUsername { get; set; }
        [EditLink]
        [DisplayName("Nombre"), Width(246)]
        public String CustomerName { get; set; }
        [DisplayName("Tarjeta de Credito"), Width(246)]
        public String CustomerCreditCard { get; set; }
        [DisplayName("Fecha"), Width(246), QuickFilter]
        public DateTime CustomerDateCreated { get; set; }
    }
}