
namespace SportFlowApp.SportFlow.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [ColumnsScript("SportFlow.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsColumns
    {
        [DisplayName("Db.Shared.RecordId"), Hidden, AlignRight]
        public Int32 ProductId { get; set; }
        [DisplayName("Nombre"), Width(246), EditLink]
        public String ProductName { get; set; }
        [DisplayName("Categoria"), Width(246)]
        public String ProductCategoryCategoryName { get; set; }
        [DisplayName("Precio Unitario"), Width(124)]
        public Decimal ProductUnitPrice { get; set; }
        [DisplayName("Descontinuado"), Width(124), QuickFilter]
        public Boolean ProductDiscontinued { get; set; }
        [DisplayName("Fecha"), Width(124), QuickFilter]
        public DateTime ProductDateCreated { get; set; }
    }
}