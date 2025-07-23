using FluentMigrator;
namespace SportFlowApp.Migrations.SportFlowDB
{
    [Migration(20250719000004)]
    public class SportFlowDB_20250719_000004_Provinces : Migration
    {
        public override void Up()
        {
            Create.Table("Provinces")
                .WithColumn("ProvinceID").AsInt32().PrimaryKey().Identity()
                .WithColumn("ProvinceName").AsString(100).NotNullable();

            Insert.IntoTable("Provinces").Row(new{ProvinceName = "La Altagracia"});
            Insert.IntoTable("Provinces").Row(new{ProvinceName = "La Romana"});
            Insert.IntoTable("Provinces").Row(new{ProvinceName = "El Seibo"});
            Insert.IntoTable("Provinces").Row(new{ProvinceName = "Hato Mayor"});
            Insert.IntoTable("Provinces").Row(new{ProvinceName = "San Pedro de Macorís"});
            Insert.IntoTable("Provinces").Row(new{ProvinceName = "Monte Plata"});
            Insert.IntoTable("Provinces").Row(new{ProvinceName = "Samaná"});
            Insert.IntoTable("Provinces").Row(new{ProvinceName = "Puerto Plata"});
            Insert.IntoTable("Provinces").Row(new{ProvinceName = "María Trinidad Sánchez"});
        }

        public override void Down()
        {
            Delete.Table("Provinces");
        }
    }
}
