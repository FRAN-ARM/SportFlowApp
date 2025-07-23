using FluentMigrator;
namespace SportFlowApp.Migrations.SportFlowDB
{
    [Migration(20250719000006)]
    public class SportFlowDB_20250719_000006_Orders : Migration
    {
        public override void Up()
        {
            Create.Table("Orders")
                .WithColumn("OrderID").AsInt32().PrimaryKey().Identity()
                .WithColumn("OrderCustomerID").AsInt32().Nullable()
                .WithColumn("OrderProvinceID").AsInt32().Nullable()
                .WithColumn("OrderCityID").AsInt32().Nullable()
                .WithColumn("OrderStatus").AsString(64).Nullable()
                .WithColumn("OrderDateCreated").AsDateTime().Nullable();

            Create.ForeignKey("FK_Orders_Customers")
                .FromTable("Orders").ForeignColumn("OrderCustomerID")
                .ToTable("Customers").PrimaryColumn("CustomerID");

            Create.ForeignKey("FK_Orders_Provinces")
                .FromTable("Orders").ForeignColumn("OrderProvinceID")
                .ToTable("Provinces").PrimaryColumn("ProvinceID");

            Create.ForeignKey("FK_Orders_Cities")
                .FromTable("Orders").ForeignColumn("OrderCityID")
                .ToTable("Cities").PrimaryColumn("CityID");
        }

        public override void Down()
        {
            Delete.ForeignKey("FK_Orders_Customers").OnTable("Orders");
            Delete.ForeignKey("FK_Orders_Provinces").OnTable("Orders");
            Delete.ForeignKey("FK_Orders_Cities").OnTable("Orders");
            Delete.Table("Orders");
        }
    }
}
