
namespace SportFlowApp.SportFlow.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SportFlow.Cities")]
    [BasedOnRow(typeof(Entities.CitiesRow), CheckNames = true)]
    public class CitiesForm
    {
        [Category("Datos")]
        [Required, LookupEditor(typeof(Entities.ProvincesRow))]
        public Int32 CityProvinceId { get; set; }
        [Required, MaxLength(100)]
        public String CityName { get; set; }
    }
}