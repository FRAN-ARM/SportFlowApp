using FluentMigrator;
namespace SportFlowApp.Migrations.SportFlowDB
{
    [Migration(20250719000007)]
    public class SportFlowDB_20250719_000007_OrderDetails : Migration
    {
        public override void Up()
        {
            Create.Table("OrderDetails")
                .WithColumn("DetailID").AsInt32().PrimaryKey().Identity()
                .WithColumn("DetailOrderID").AsInt32().NotNullable()
                .WithColumn("DetailProductID").AsInt32().NotNullable()
                .WithColumn("DetailQuantity").AsInt16().WithDefaultValue(1).NotNullable()
                .WithColumn("DetailUnitPrice").AsDecimal(10, 4).WithDefaultValue(0).NotNullable()
                .WithColumn("DetailDiscount").AsFloat().WithDefaultValue(0).NotNullable();

            Create.ForeignKey("FK_OrderDetails_Orders")
                .FromTable("OrderDetails").ForeignColumn("DetailOrderID")
                .ToTable("Orders").PrimaryColumn("OrderID");

            Create.ForeignKey("FK_OrderDetails_Products")
                .FromTable("OrderDetails").ForeignColumn("DetailProductID")
                .ToTable("Products").PrimaryColumn("ProductID");
        }

        public override void Down()
        {
            Delete.ForeignKey("FK_OrderDetails_Orders").OnTable("OrderDetails");
            Delete.ForeignKey("FK_OrderDetails_Products").OnTable("OrderDetails");
            Delete.Table("OrderDetails");
        }
    }
}
