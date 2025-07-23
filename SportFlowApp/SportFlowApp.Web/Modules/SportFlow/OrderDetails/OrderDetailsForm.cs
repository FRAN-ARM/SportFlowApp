
namespace SportFlowApp.SportFlow.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SportFlow.OrderDetails")]
    [BasedOnRow(typeof(Entities.OrderDetailsRow), CheckNames = true)]
    public class OrderDetailsForm
    {
        [Category("Datos")]
        public Int32 DetailProductId { get; set; }
        [DecimalEditor]
        public Decimal DetailUnitPrice { get; set; }
        public Int16 DetailQuantity { get; set; }
        public Single DetailDiscount { get; set; }
    }
}