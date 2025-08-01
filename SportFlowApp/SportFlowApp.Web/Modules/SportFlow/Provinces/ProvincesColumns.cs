﻿
namespace SportFlowApp.SportFlow.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("SportFlow.Provinces")]
    [BasedOnRow(typeof(Entities.ProvincesRow), CheckNames = true)]
    public class ProvincesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProvinceId { get; set; }
        [EditLink]
        [DisplayName("Nombre"), Width(246)]
        public String ProvinceName { get; set; }
    }
}