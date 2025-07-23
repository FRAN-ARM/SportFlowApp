
namespace SportFlowApp.SportFlow.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SportFlow"), Module("SportFlow"), TableName("[dbo].[Provinces]")]
    [DisplayName("Provinces"), InstanceName("Provinces")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("SportFlow.Provinces")]
    public sealed class ProvincesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Province Id"), Column("ProvinceID"), Identity, PrimaryKey]
        public Int32? ProvinceId
        {
            get { return Fields.ProvinceId[this]; }
            set { Fields.ProvinceId[this] = value; }
        }

        [DisplayName("Province Name"), Size(100), NotNull, QuickSearch]
        public String ProvinceName
        {
            get { return Fields.ProvinceName[this]; }
            set { Fields.ProvinceName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProvinceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProvinceName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProvincesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProvinceId;
            public StringField ProvinceName;
        }
    }
}
