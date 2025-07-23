
namespace SportFlowApp.SportFlow.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SportFlow"), Module("SportFlow"), TableName("[dbo].[OrderDetails]")]
    [DisplayName("Order Details"), InstanceName("Order Details")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OrderDetailsRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("DetailID"), Identity, PrimaryKey]
        public Int32? DetailId
        {
            get { return Fields.DetailId[this]; }
            set { Fields.DetailId[this] = value; }
        }

        //[DisplayName("Detalle"), Column("DetailOrderID"), NotNull, ForeignKey("[dbo].[Orders]", "OrderID"), LeftJoin("jDetailOrder"), TextualField("DetailOrderOrderStatus")]
        [DisplayName("Order Id"), PrimaryKey, ForeignKey(typeof(OrdersRow)), LeftJoin("jDetailOrder"), Updatable(false)]
        public Int32? DetailOrderId
        {
            get { return Fields.DetailOrderId[this]; }
            set { Fields.DetailOrderId[this] = value; }
        }

        [DisplayName("Producto"), Column("DetailProductID"), NotNull, ForeignKey(typeof(ProductsRow)), LeftJoin("jDetailProduct"), TextualField("DetailProductProductName")]
        [LookupEditor(typeof(ProductsRow))]
        public Int32? DetailProductId
        {
            get { return Fields.DetailProductId[this]; }
            set { Fields.DetailProductId[this] = value; }
        }

        [DisplayName("Cantidad"), NotNull, DefaultValue(1)]
        public Int16? DetailQuantity
        {
            get { return Fields.DetailQuantity[this]; }
            set { Fields.DetailQuantity[this] = value; }
        }

        [DisplayName("Precio Unitario"), Scale(4), NotNull, DisplayFormat("#,##0.00")]
        public Decimal? DetailUnitPrice
        {
            get { return Fields.DetailUnitPrice[this]; }
            set { Fields.DetailUnitPrice[this] = value; }
        }

        [DisplayName("Descuento"), NotNull, DefaultValue(0), AlignRight, DisplayFormat("#,##0.00")]
        public Single? DetailDiscount
        {
            get { return Fields.DetailDiscount[this]; }
            set { Fields.DetailDiscount[this] = value; }
        }

        [Origin("jDetailOrder"), DisplayName("Detail Order Order Customer Id"), Expression("jDetailOrder.[OrderCustomerID]")]
        public Int32? DetailOrderOrderCustomerId
        {
            get { return Fields.DetailOrderOrderCustomerId[this]; }
            set { Fields.DetailOrderOrderCustomerId[this] = value; }
        }

        [Origin("jDetailOrder"), DisplayName("Detail Order Order Province Id"), Expression("jDetailOrder.[OrderProvinceID]")]
        public Int32? DetailOrderOrderProvinceId
        {
            get { return Fields.DetailOrderOrderProvinceId[this]; }
            set { Fields.DetailOrderOrderProvinceId[this] = value; }
        }

        [Origin("jDetailOrder"), DisplayName("Detail Order Order City Id"), Expression("jDetailOrder.[OrderCityID]")]
        public Int32? DetailOrderOrderCityId
        {
            get { return Fields.DetailOrderOrderCityId[this]; }
            set { Fields.DetailOrderOrderCityId[this] = value; }
        }

        [Origin("jDetailOrder"), DisplayName("Detail Order Order Status"), Expression("jDetailOrder.[OrderStatus]")]
        public String DetailOrderOrderStatus
        {
            get { return Fields.DetailOrderOrderStatus[this]; }
            set { Fields.DetailOrderOrderStatus[this] = value; }
        }

        [Origin("jDetailOrder"), DisplayName("Detail Order Order Date Created"), Expression("jDetailOrder.[OrderDateCreated]")]
        public DateTime? DetailOrderOrderDateCreated
        {
            get { return Fields.DetailOrderOrderDateCreated[this]; }
            set { Fields.DetailOrderOrderDateCreated[this] = value; }
        }

        [Origin("jDetailProduct"), DisplayName("Detail Product Product Category Id"), Expression("jDetailProduct.[ProductCategoryID]")]
        public Int32? DetailProductProductCategoryId
        {
            get { return Fields.DetailProductProductCategoryId[this]; }
            set { Fields.DetailProductProductCategoryId[this] = value; }
        }

        [Origin("jDetailProduct"), DisplayName("Detail Product Product Name"), Expression("jDetailProduct.[ProductName]")]
        public String DetailProductProductName
        {
            get { return Fields.DetailProductProductName[this]; }
            set { Fields.DetailProductProductName[this] = value; }
        }

        [Origin("jDetailProduct"), DisplayName("Detail Product Product Unit Price"), Expression("jDetailProduct.[ProductUnitPrice]")]
        public Decimal? DetailProductProductUnitPrice
        {
            get { return Fields.DetailProductProductUnitPrice[this]; }
            set { Fields.DetailProductProductUnitPrice[this] = value; }
        }

        [Origin("jDetailProduct"), DisplayName("Detail Product Product Discontinued"), Expression("jDetailProduct.[ProductDiscontinued]")]
        public Boolean? DetailProductProductDiscontinued
        {
            get { return Fields.DetailProductProductDiscontinued[this]; }
            set { Fields.DetailProductProductDiscontinued[this] = value; }
        }

        [Origin("jDetailProduct"), DisplayName("Detail Product Product Date Created"), Expression("jDetailProduct.[ProductDateCreated]")]
        public DateTime? DetailProductProductDateCreated
        {
            get { return Fields.DetailProductProductDateCreated[this]; }
            set { Fields.DetailProductProductDateCreated[this] = value; }
        }

        [DisplayName("Total"), Expression("(T0.[UnitPrice] * T0.[Quantity] - T0.[Discount])")]
        [AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Decimal? DetailTotal
        {
            get { return Fields.DetailTotal[this]; }
            set { Fields.DetailTotal[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DetailId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DetailId;
            public Int32Field DetailOrderId;
            public Int32Field DetailProductId;
            public Int16Field DetailQuantity;
            public DecimalField DetailUnitPrice;
            public SingleField DetailDiscount;

            public Int32Field DetailOrderOrderCustomerId;
            public Int32Field DetailOrderOrderProvinceId;
            public Int32Field DetailOrderOrderCityId;
            public StringField DetailOrderOrderStatus;
            public DateTimeField DetailOrderOrderDateCreated;

            public Int32Field DetailProductProductCategoryId;
            public StringField DetailProductProductName;
            public DecimalField DetailProductProductUnitPrice;
            public BooleanField DetailProductProductDiscontinued;
            public DateTimeField DetailProductProductDateCreated;

            public DecimalField DetailTotal;
        }
    }
}
