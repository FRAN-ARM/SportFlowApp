
namespace SportFlowApp.SportFlow.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SportFlowApp.SportFlow.Entities;
    using SportFlowApp.Modules.SportFlow.Enums;

    [FormScript("SportFlow.Orders")]
    [BasedOnRow(typeof(OrdersRow), CheckNames = true)]
    public class OrdersForm
    {
        [Category("General")]
        [Required, LookupEditor(typeof(CustomersRow), InplaceAdd = false, AutoComplete = true)]
        public Int32 OrderCustomerId { get; set; }
        [Required, LookupEditor(typeof(ProvincesRow), InplaceAdd = false, AutoComplete = true)]
        public Int32 OrderProvinceId { get; set; }
        [Required, LookupEditor(typeof(CitiesRow), CascadeFrom = "OrderProvinceId", CascadeField = "CityProvinceId", InplaceAdd = false, AutoComplete = true)]
        public Int32 OrderCityId { get; set; }
        [Required]
        public OrderStatusKind OrderStatus { get; set; }
        [Category("Detalles")]
        [Required, OrderDetailsEditor]
        public List<Entities.OrderDetailsRow> DetailsList { get; set; }
        [Category("")]
        [DisplayName("Fecha"), ReadOnly(true)]
        public DateTime OrderDateCreated { get; set; }
    }
}