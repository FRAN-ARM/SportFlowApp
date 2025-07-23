
namespace SportFlowApp.SportFlow.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SportFlow.Provinces")]
    [BasedOnRow(typeof(Entities.ProvincesRow), CheckNames = true)]
    public class ProvincesForm
    {
        [Category("Dato")]
        [DisplayName("Nombre"), Required, MaxLength(100)]
        public String ProvinceName { get; set; }
    }
}