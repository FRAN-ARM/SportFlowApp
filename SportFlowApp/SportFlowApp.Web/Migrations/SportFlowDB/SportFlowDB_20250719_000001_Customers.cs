using FluentMigrator;
namespace SportFlowApp.Migrations.SportFlowDB
{
    [Migration(20250719000001)]
    public class SportFlowDB_20250719_000001_Customers : Migration
    {
        public override void Up()
        {
            Create.Table("Customers")
                .WithColumn("CustomerID").AsInt32().PrimaryKey().Identity()
                .WithColumn("CustomerUserID").AsInt32().Nullable()
                .WithColumn("CustomerName").AsString(128).NotNullable()
                .WithColumn("CustomerCreditCard").AsString(16).Unique().Nullable()
                .WithColumn("CustomerDateCreated").AsDateTime().Nullable();

            Create.ForeignKey("FK_Customers_Users")
                .FromTable("Customers").ForeignColumn("CustomerUserID")
                .ToTable("Users").PrimaryColumn("UserId");
        }

        public override void Down()
        {
            Delete.ForeignKey("FK_Customers_Users").OnTable("Customers");
            Delete.Table("Customers");
        }
    }
}
