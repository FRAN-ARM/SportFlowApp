
namespace SportFlowApp.SportFlowCustomer.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SportFlowCustomer.CustomerOrders")]
    [BasedOnRow(typeof(Entities.CustomerOrdersRow), CheckNames = true)]
    public class CustomerOrdersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 OrderId { get; set; }
        [DisplayName("Nombre"), Width(242)]
        public String OrderCustomerCustomerName { get; set; }
        [DisplayName("Provincia"), Width(242)]
        public String OrderProvinceProvinceName { get; set; }
        [DisplayName("Ciudad"), Width(242)]
        public String OrderCityCityName { get; set; }
        [DisplayName("Estado"), Width(242), QuickFilter]
        public String OrderStatus { get; set; }
        [DisplayName("Fecha"), Width(142), QuickFilter]
        public DateTime OrderDateCreated { get; set; }
    }
}