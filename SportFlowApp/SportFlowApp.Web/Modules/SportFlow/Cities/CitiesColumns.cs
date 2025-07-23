
namespace SportFlowApp.SportFlow.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SportFlow.Cities")]
    [BasedOnRow(typeof(Entities.CitiesRow), CheckNames = true)]
    public class CitiesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CityId { get; set; }
        [EditLink]
        [DisplayName("Nombre"), Width(246)]
        public String CityName { get; set; }
        [DisplayName("Provincia"), Width(246)]
        public String CityProvinceProvinceName { get; set; }
    }
}