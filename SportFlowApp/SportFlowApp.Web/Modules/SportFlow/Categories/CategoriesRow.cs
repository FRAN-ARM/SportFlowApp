
namespace SportFlowApp.SportFlow.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SportFlow"), Module("SportFlow"), TableName("[dbo].[Categories]")]
    [DisplayName("Categories"), InstanceName("Categories")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("SportFlow.Categories")]
    public sealed class CategoriesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("CategoryID"), Identity, PrimaryKey]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Nombre"), Size(32), NotNull, QuickSearch]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("Descripcion"), Size(128)]
        public String CategoryDescription
        {
            get { return Fields.CategoryDescription[this]; }
            set { Fields.CategoryDescription[this] = value; }
        }

        [DisplayName("Fecha")]
        public DateTime? CategoryDateCreated
        {
            get { return Fields.CategoryDateCreated[this]; }
            set { Fields.CategoryDateCreated[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoriesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CategoryId;
            public StringField CategoryName;
            public StringField CategoryDescription;
            public DateTimeField CategoryDateCreated;
        }
    }
}
