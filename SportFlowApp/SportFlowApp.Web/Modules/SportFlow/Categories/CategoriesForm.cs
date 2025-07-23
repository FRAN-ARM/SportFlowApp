
namespace SportFlowApp.SportFlow.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SportFlow.Categories")]
    [BasedOnRow(typeof(Entities.CategoriesRow), CheckNames = true)]
    public class CategoriesForm
    {
        [Category("Datos")]
        [Required, MaxLength(32)]
        public String CategoryName { get; set; }
        [MaxLength(128)]
        public String CategoryDescription { get; set; }
        [Category("")]
        [DisplayName("Fecha"), ReadOnly(true)]
        public DateTime CategoryDateCreated { get; set; }
    }
}