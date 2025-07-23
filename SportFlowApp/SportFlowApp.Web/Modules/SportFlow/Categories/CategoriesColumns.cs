
namespace SportFlowApp.SportFlow.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SportFlow.Categories")]
    [BasedOnRow(typeof(Entities.CategoriesRow), CheckNames = true)]
    public class CategoriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CategoryId { get; set; }
        [EditLink]
        [DisplayName("Nombre")]
        public String CategoryName { get; set; }
        [DisplayName("Descripcion"), Width(324)]
        public String CategoryDescription { get; set; }
        [DisplayName("Fecha"), QuickFilter]
        public DateTime CategoryDateCreated { get; set; }
    }
}