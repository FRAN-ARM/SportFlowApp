
namespace SportFlowApp.SportFlow.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SportFlow.OrderDetails")]
    [BasedOnRow(typeof(Entities.OrderDetailsRow), CheckNames = true)]
    public class OrderDetailsColumns
    {
        /*[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DetailId { get; set; }
        [DisplayName("Estado"), Width(246)]
        public String DetailOrderOrderStatus { get; set; }*/
        [DisplayName("Producto - Nombre"), Width(246)]
        public String DetailProductProductName { get; set; }
        [DisplayName("Cantidad"), Width(92)]
        public Int16 DetailQuantity { get; set; }
        [DisplayName("Precio Unitario"), Width(124)]
        public Decimal DetailUnitPrice { get; set; }
        [DisplayName("Descuento"), Width(92), ReadOnly(true)]
        public Single DetailDiscount { get; set; }
        [Width(92)]
        public Decimal DetailTotal { get; set; }
    }
}