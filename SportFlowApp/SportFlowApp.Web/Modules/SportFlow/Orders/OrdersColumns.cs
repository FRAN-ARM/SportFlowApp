
namespace SportFlowApp.SportFlow.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SportFlow.Orders")]
    [BasedOnRow(typeof(Entities.OrdersRow), CheckNames = true)]
    public class OrdersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OrderId { get; set; }
        [DisplayName("Cliente"), Width(246)]
        public String OrderCustomerCustomerName { get; set; }
        [DisplayName("Ubicación"), Width(368)]
        public String OrderAddress { get; set; }
        [EditLink]
        [DisplayName("Estado"), Width(124), QuickFilter]
        public String OrderStatus { get; set; }
        [DisplayName("Fecha"), Width(124), QuickFilter]
        public DateTime OrderDateCreated { get; set; }
    }
}