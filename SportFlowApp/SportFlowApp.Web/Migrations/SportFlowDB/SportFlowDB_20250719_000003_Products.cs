using FluentMigrator;
using System;

namespace SportFlowApp.Migrations.SportFlowDB
{
    [Migration(20250719000003)]
    public class SportFlowDB_20250719_000003_Products : Migration
    {
        public override void Up()
        {
            Create.Table("Products")
                .WithColumn("ProductID").AsInt32().PrimaryKey().Identity()
                .WithColumn("ProductCategoryID").AsInt32().Nullable()
                .WithColumn("ProductName").AsString(92).NotNullable()
                .WithColumn("ProductUnitPrice").AsDecimal(10, 4).WithDefaultValue(0)
                .WithColumn("ProductDiscontinued").AsBoolean().WithDefaultValue(false)
                .WithColumn("ProductDateCreated").AsDateTime().Nullable();

            Create.ForeignKey("FK_Products_Category")
                .FromTable("Products").ForeignColumn("ProductCategoryID")
                .ToTable("Categories").PrimaryColumn("CategoryID");

            Insert.IntoTable("Products").Row(new
            {
                ProductCategoryID = 1,
                ProductName = "Balón de fútbol oficial",
                ProductUnitPrice = 29.99m,
                ProductDiscontinued = false,
                ProductDateCreated = DateTime.UtcNow
            });

            Insert.IntoTable("Products").Row(new
            {
                ProductCategoryID = 1,
                ProductName = "Espinilleras de fútbol",
                ProductUnitPrice = 15.50m,
                ProductDiscontinued = false,
                ProductDateCreated = DateTime.UtcNow
            });

            Insert.IntoTable("Products").Row(new
            {
                ProductCategoryID = 2,
                ProductName = "Balón de baloncesto",
                ProductUnitPrice = 24.99m,
                ProductDiscontinued = false,
                ProductDateCreated = DateTime.UtcNow
            });

            Insert.IntoTable("Products").Row(new
            {
                ProductCategoryID = 3,
                ProductName = "Bate de béisbol de madera",
                ProductUnitPrice = 39.95m,
                ProductDiscontinued = false,
                ProductDateCreated = DateTime.UtcNow
            });

            Insert.IntoTable("Products").Row(new
            {
                ProductCategoryID = 4,
                ProductName = "Gafas de natación profesionales",
                ProductUnitPrice = 19.99m,
                ProductDiscontinued = false,
                ProductDateCreated = DateTime.UtcNow
            });

            Insert.IntoTable("Products").Row(new
            {
                ProductCategoryID = 5,
                ProductName = "Casco de ciclismo de montaña",
                ProductUnitPrice = 49.90m,
                ProductDiscontinued = false,
                ProductDateCreated = DateTime.UtcNow
            });
        }

        public override void Down()
        {
            Delete.ForeignKey("FK_Products_Category").OnTable("Products");
            Delete.Table("Products");
        }
    }
}
