﻿
namespace SportFlowApp.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Administration.Role")]
    [BasedOnRow(typeof(Entities.RoleRow), CheckNames = true)]
    public class RoleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RoleId { get; set; }
        [EditLink, Width(300)]
        public String RoleName { get; set; }
    }
}