
namespace SportFlowApp.SportFlow.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SportFlow.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsForm
    {
        [Category("Datos")]
        [DisplayName("Nombre"), StringEditor, Required, MaxLength(92)]
        public String ProductName { get; set; }
        [DisplayName("Precio Unitario"), DecimalEditor]
        public Decimal ProductUnitPrice { get; set; }
        [Required, LookupEditor(typeof(Entities.CategoriesRow))]
        public Int32 ProductCategoryId { get; set; }
        [DisplayName("Descontinuado")]
        public Boolean ProductDiscontinued { get; set; }
        [Category("")]
        [DisplayName("Fecha"), ReadOnly(true)]
        public DateTime ProductDateCreated { get; set; }
    }
}