
namespace SportFlowApp.SportFlow.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SportFlow"), Module("SportFlow"), TableName("[dbo].[Products]")]
    [DisplayName("Products"), InstanceName("Products")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("SportFlow.Products")]
    public sealed class ProductsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ProductID"), Identity, PrimaryKey]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Categoria"), Column("ProductCategoryID"), ForeignKey("[dbo].[Categories]", "CategoryID"), LeftJoin("jProductCategory"), TextualField("ProductCategoryCategoryName")]
        public Int32? ProductCategoryId
        {
            get { return Fields.ProductCategoryId[this]; }
            set { Fields.ProductCategoryId[this] = value; }
        }

        [DisplayName("Nombre"), Size(92), NotNull, QuickSearch]
        [LookupInclude]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Precio Unitario"), Size(10), Scale(4), NotNull]
        [LookupInclude]
        public Decimal? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        [DisplayName("Descontinuado"), NotNull]
        public Boolean? ProductDiscontinued
        {
            get { return Fields.ProductDiscontinued[this]; }
            set { Fields.ProductDiscontinued[this] = value; }
        }

        [DisplayName("Fecha")]
        public DateTime? ProductDateCreated
        {
            get { return Fields.ProductDateCreated[this]; }
            set { Fields.ProductDateCreated[this] = value; }
        }

        [DisplayName("Categoria"), Expression("jProductCategory.[CategoryName]")]
        public String ProductCategoryCategoryName
        {
            get { return Fields.ProductCategoryCategoryName[this]; }
            set { Fields.ProductCategoryCategoryName[this] = value; }
        }

        [DisplayName("Categoria - Descripcion"), Expression("jProductCategory.[CategoryDescription]")]
        public String ProductCategoryCategoryDescription
        {
            get { return Fields.ProductCategoryCategoryDescription[this]; }
            set { Fields.ProductCategoryCategoryDescription[this] = value; }
        }

        [DisplayName("Categoria - Fecha"), Expression("jProductCategory.[CategoryDateCreated]")]
        public DateTime? ProductCategoryCategoryDateCreated
        {
            get { return Fields.ProductCategoryCategoryDateCreated[this]; }
            set { Fields.ProductCategoryCategoryDateCreated[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductId;
            public Int32Field ProductCategoryId;
            public StringField ProductName;
            public DecimalField ProductUnitPrice;
            public BooleanField ProductDiscontinued;
            public DateTimeField ProductDateCreated;

            public StringField ProductCategoryCategoryName;
            public StringField ProductCategoryCategoryDescription;
            public DateTimeField ProductCategoryCategoryDateCreated;
        }
    }
}
