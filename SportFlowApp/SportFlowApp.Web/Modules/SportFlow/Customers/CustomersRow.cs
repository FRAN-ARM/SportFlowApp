
namespace SportFlowApp.SportFlow.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SportFlow"), Module("SportFlow"), TableName("[dbo].[Customers]")]
    [DisplayName("Customers"), InstanceName("Customers")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("SportFlow.Customers")]
    public sealed class CustomersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("CustomerID"), Identity, PrimaryKey]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Usuario"), Column("CustomerUserID"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jCustomerUser"), TextualField("CustomerUserUsername")]
        public Int32? CustomerUserId
        {
            get { return Fields.CustomerUserId[this]; }
            set { Fields.CustomerUserId[this] = value; }
        }

        [DisplayName("Nombre"), Size(128), NotNull, QuickSearch]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Tarjeta de Credito"), Size(16)]
        public String CustomerCreditCard
        {
            get { return Fields.CustomerCreditCard[this]; }
            set { Fields.CustomerCreditCard[this] = value; }
        }

        [DisplayName("Fecha")]
        public DateTime? CustomerDateCreated
        {
            get { return Fields.CustomerDateCreated[this]; }
            set { Fields.CustomerDateCreated[this] = value; }
        }

        [DisplayName("Customer User Username"), Expression("jCustomerUser.[Username]")]
        public String CustomerUserUsername
        {
            get { return Fields.CustomerUserUsername[this]; }
            set { Fields.CustomerUserUsername[this] = value; }
        }

        [DisplayName("Nombre Publico"), Expression("jCustomerUser.[DisplayName]")]
        public String CustomerUserDisplayName
        {
            get { return Fields.CustomerUserDisplayName[this]; }
            set { Fields.CustomerUserDisplayName[this] = value; }
        }

        [DisplayName("Correo Electronico"), Expression("jCustomerUser.[Email]")]
        public String CustomerUserEmail
        {
            get { return Fields.CustomerUserEmail[this]; }
            set { Fields.CustomerUserEmail[this] = value; }
        }

        [DisplayName("User Source"), Expression("jCustomerUser.[Source]")]
        public String CustomerUserSource
        {
            get { return Fields.CustomerUserSource[this]; }
            set { Fields.CustomerUserSource[this] = value; }
        }

        [DisplayName("User Password Hash"), Expression("jCustomerUser.[PasswordHash]")]
        public String CustomerUserPasswordHash
        {
            get { return Fields.CustomerUserPasswordHash[this]; }
            set { Fields.CustomerUserPasswordHash[this] = value; }
        }

        [DisplayName("User Password Salt"), Expression("jCustomerUser.[PasswordSalt]")]
        public String CustomerUserPasswordSalt
        {
            get { return Fields.CustomerUserPasswordSalt[this]; }
            set { Fields.CustomerUserPasswordSalt[this] = value; }
        }

        [DisplayName("User Last Directory Update"), Expression("jCustomerUser.[LastDirectoryUpdate]")]
        public DateTime? CustomerUserLastDirectoryUpdate
        {
            get { return Fields.CustomerUserLastDirectoryUpdate[this]; }
            set { Fields.CustomerUserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User User Image"), Expression("jCustomerUser.[UserImage]")]
        public String CustomerUserUserImage
        {
            get { return Fields.CustomerUserUserImage[this]; }
            set { Fields.CustomerUserUserImage[this] = value; }
        }

        [DisplayName("User Insert Date"), Expression("jCustomerUser.[InsertDate]")]
        public DateTime? CustomerUserInsertDate
        {
            get { return Fields.CustomerUserInsertDate[this]; }
            set { Fields.CustomerUserInsertDate[this] = value; }
        }

        [DisplayName("User Insert User Id"), Expression("jCustomerUser.[InsertUserId]")]
        public Int32? CustomerUserInsertUserId
        {
            get { return Fields.CustomerUserInsertUserId[this]; }
            set { Fields.CustomerUserInsertUserId[this] = value; }
        }

        [DisplayName("User Update Date"), Expression("jCustomerUser.[UpdateDate]")]
        public DateTime? CustomerUserUpdateDate
        {
            get { return Fields.CustomerUserUpdateDate[this]; }
            set { Fields.CustomerUserUpdateDate[this] = value; }
        }

        [DisplayName("User Update User Id"), Expression("jCustomerUser.[UpdateUserId]")]
        public Int32? CustomerUserUpdateUserId
        {
            get { return Fields.CustomerUserUpdateUserId[this]; }
            set { Fields.CustomerUserUpdateUserId[this] = value; }
        }

        [DisplayName("User Is Active"), Expression("jCustomerUser.[IsActive]")]
        public Int16? CustomerUserIsActive
        {
            get { return Fields.CustomerUserIsActive[this]; }
            set { Fields.CustomerUserIsActive[this] = value; }
        }

        [NotMapped]
        public String CustomerUsername
        {
            get { return Fields.CustomerUsername[this]; }
            set { Fields.CustomerUsername[this] = value; }
        }
        [NotMapped]
        public String UserEmail
        {
            get { return Fields.UserEmail[this]; }
            set { Fields.UserEmail[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerId;
            public Int32Field CustomerUserId;
            public StringField CustomerName;
            public StringField CustomerCreditCard;
            public DateTimeField CustomerDateCreated;

            public StringField CustomerUserUsername;
            public StringField CustomerUserDisplayName;
            public StringField CustomerUserEmail;
            public StringField CustomerUserSource;
            public StringField CustomerUserPasswordHash;
            public StringField CustomerUserPasswordSalt;
            public DateTimeField CustomerUserLastDirectoryUpdate;
            public StringField CustomerUserUserImage;
            public DateTimeField CustomerUserInsertDate;
            public Int32Field CustomerUserInsertUserId;
            public DateTimeField CustomerUserUpdateDate;
            public Int32Field CustomerUserUpdateUserId;
            public Int16Field CustomerUserIsActive;

            public StringField CustomerUsername;
            public StringField UserEmail;
        }
    }
}
