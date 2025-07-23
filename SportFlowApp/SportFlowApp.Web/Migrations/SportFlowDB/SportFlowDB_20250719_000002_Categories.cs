using FluentMigrator;
using System;

namespace SportFlowApp.Migrations.SportFlowDB
{
    [Migration(20250719000002)]
    public class SportFlowDB_20250719_000002_Categories : Migration
    {
        public override void Up()
        {
            Create.Table("Categories")
                .WithColumn("CategoryID").AsInt32().PrimaryKey().Identity()
                .WithColumn("CategoryName").AsString(32).NotNullable()
                .WithColumn("CategoryDescription").AsString(128).Nullable()
                .WithColumn("CategoryDateCreated").AsDateTime().Nullable();

            Insert.IntoTable("Categories").Row(new
            {
                CategoryName = "Fútbol",
                CategoryDescription = "Balones, uniformes y accesorios para fútbol",
                CategoryDateCreated = DateTime.UtcNow
            });

            Insert.IntoTable("Categories").Row(new
            {
                CategoryName = "Básquetbol",
                CategoryDescription = "Pelotas, aros, ropa deportiva y más",
                CategoryDateCreated = DateTime.UtcNow
            });

            Insert.IntoTable("Categories").Row(new
            {
                CategoryName = "Beisbol",
                CategoryDescription = "Bates, guantes, pelotas y uniformes",
                CategoryDateCreated = DateTime.UtcNow
            });

            Insert.IntoTable("Categories").Row(new
            {
                CategoryName = "Natación",
                CategoryDescription = "Trajes de baño, gafas, gorros y otros accesorios",
                CategoryDateCreated = DateTime.UtcNow
            });

            Insert.IntoTable("Categories").Row(new
            {
                CategoryName = "Ciclismo",
                CategoryDescription = "Bicicletas, cascos, ropa y accesorios",
                CategoryDateCreated = DateTime.UtcNow
            });

            Insert.IntoTable("Categories").Row(new
            {
                CategoryName = "GYM",
                CategoryDescription = "Pesas, guantes y otros.",
                CategoryDateCreated = DateTime.UtcNow
            });
        }

        public override void Down()
        {
            Delete.Table("Categories");
        }
    }
}
