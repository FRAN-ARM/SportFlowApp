
namespace SportFlowApp.SportFlow.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SportFlow"), Module("SportFlow"), TableName("[dbo].[Cities]")]
    [DisplayName("Cities"), InstanceName("Cities")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("SportFlow.Cities")]
    public sealed class CitiesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("CityID"), Identity, PrimaryKey]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Provincia"), Column("CityProvinceID"), NotNull, ForeignKey("[dbo].[Provinces]", "ProvinceID"), LeftJoin("jCityProvince"), TextualField("CityProvinceProvinceName")]
        [LookupInclude]
        public Int32? CityProvinceId
        {
            get { return Fields.CityProvinceId[this]; }
            set { Fields.CityProvinceId[this] = value; }
        }

        [DisplayName("Nombre"), Size(100), NotNull, QuickSearch]
        public String CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
        }

        [DisplayName("Provincia"), Expression("jCityProvince.[ProvinceName]")]
        public String CityProvinceProvinceName
        {
            get { return Fields.CityProvinceProvinceName[this]; }
            set { Fields.CityProvinceProvinceName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CityId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CityName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CitiesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CityId;
            public Int32Field CityProvinceId;
            public StringField CityName;

            public StringField CityProvinceProvinceName;
        }
    }

}
