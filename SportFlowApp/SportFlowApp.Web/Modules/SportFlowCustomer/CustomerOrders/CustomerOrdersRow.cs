
namespace SportFlowApp.SportFlowCustomer.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using SportFlowApp.Modules.SportFlow.Enums;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SportFlow"), Module("SportFlowCustomer"), TableName("[dbo].[Orders]")]
    [DisplayName("CustomerOrders"), InstanceName("Orders")]
    [ReadPermission("Customer:General")]
    public sealed class CustomerOrdersRow : Row, IIdRow
    {
        [DisplayName("Order Id"), Column("OrderID"), Identity]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Order Customer"), Column("OrderCustomerID"), ForeignKey("[dbo].[Customers]", "CustomerID"), LeftJoin("jOrderCustomer"), TextualField("OrderCustomerCustomerName")]
        public Int32? OrderCustomerId
        {
            get { return Fields.OrderCustomerId[this]; }
            set { Fields.OrderCustomerId[this] = value; }
        }

        [DisplayName("Order Province"), Column("OrderProvinceID"), ForeignKey("[dbo].[Provinces]", "ProvinceID"), LeftJoin("jOrderProvince"), TextualField("OrderProvinceProvinceName")]
        public Int32? OrderProvinceId
        {
            get { return Fields.OrderProvinceId[this]; }
            set { Fields.OrderProvinceId[this] = value; }
        }

        [DisplayName("Order City"), Column("OrderCityID"), ForeignKey("[dbo].[Cities]", "CityID"), LeftJoin("jOrderCity"), TextualField("OrderCityCityName")]
        public Int32? OrderCityId
        {
            get { return Fields.OrderCityId[this]; }
            set { Fields.OrderCityId[this] = value; }
        }

        [DisplayName("Order Status"), Size(64), QuickSearch]
        public OrderStatusKind OrderStatus
        {
            get { return (OrderStatusKind)(OrderStatusKind?)Fields.OrderStatus[this]; }
            set { Fields.OrderStatus[this] = (Int32?)value; }
        }

        [DisplayName("Order Date Created")]
        public DateTime? OrderDateCreated
        {
            get { return Fields.OrderDateCreated[this]; }
            set { Fields.OrderDateCreated[this] = value; }
        }

        [DisplayName("Order Customer Customer User Id"), Expression("jOrderCustomer.[CustomerUserID]")]
        public Int32? OrderCustomerCustomerUserId
        {
            get { return Fields.OrderCustomerCustomerUserId[this]; }
            set { Fields.OrderCustomerCustomerUserId[this] = value; }
        }

        [DisplayName("Order Customer Customer Name"), Expression("jOrderCustomer.[CustomerName]")]
        public String OrderCustomerCustomerName
        {
            get { return Fields.OrderCustomerCustomerName[this]; }
            set { Fields.OrderCustomerCustomerName[this] = value; }
        }

        [DisplayName("Order Customer Customer Credit Card"), Expression("jOrderCustomer.[CustomerCreditCard]")]
        public String OrderCustomerCustomerCreditCard
        {
            get { return Fields.OrderCustomerCustomerCreditCard[this]; }
            set { Fields.OrderCustomerCustomerCreditCard[this] = value; }
        }

        [DisplayName("Order Customer Customer Date Created"), Expression("jOrderCustomer.[CustomerDateCreated]")]
        public DateTime? OrderCustomerCustomerDateCreated
        {
            get { return Fields.OrderCustomerCustomerDateCreated[this]; }
            set { Fields.OrderCustomerCustomerDateCreated[this] = value; }
        }

        [DisplayName("Order Province Province Name"), Expression("jOrderProvince.[ProvinceName]")]
        public String OrderProvinceProvinceName
        {
            get { return Fields.OrderProvinceProvinceName[this]; }
            set { Fields.OrderProvinceProvinceName[this] = value; }
        }

        [DisplayName("Order City City Province Id"), Expression("jOrderCity.[CityProvinceID]")]
        public Int32? OrderCityCityProvinceId
        {
            get { return Fields.OrderCityCityProvinceId[this]; }
            set { Fields.OrderCityCityProvinceId[this] = value; }
        }

        [DisplayName("Order City City Name"), Expression("jOrderCity.[CityName]")]
        public String OrderCityCityName
        {
            get { return Fields.OrderCityCityName[this]; }
            set { Fields.OrderCityCityName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        /*StringField INameRow.NameField
        {
            get { return Fields.OrderStatus; }
        }*/

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerOrdersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderId;
            public Int32Field OrderCustomerId;
            public Int32Field OrderProvinceId;
            public Int32Field OrderCityId;
            public Int32Field OrderStatus;
            public DateTimeField OrderDateCreated;

            public Int32Field OrderCustomerCustomerUserId;
            public StringField OrderCustomerCustomerName;
            public StringField OrderCustomerCustomerCreditCard;
            public DateTimeField OrderCustomerCustomerDateCreated;

            public StringField OrderProvinceProvinceName;

            public Int32Field OrderCityCityProvinceId;
            public StringField OrderCityCityName;
        }
    }
}
