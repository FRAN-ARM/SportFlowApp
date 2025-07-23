using FluentMigrator;
namespace SportFlowApp.Migrations.SportFlowDB
{
    [Migration(20250719000005)]
    public class SportFlowDB_20250719_000005_Cities : Migration
    {
        public override void Up()
        {
            Create.Table("Cities")
                .WithColumn("CityID").AsInt32().PrimaryKey().Identity()
                .WithColumn("CityProvinceID").AsInt32().NotNullable()
                .WithColumn("CityName").AsString(100).NotNullable();

            Create.ForeignKey("FK_Cities_Provinces")
                .FromTable("Cities").ForeignColumn("CityProvinceID")
                .ToTable("Provinces").PrimaryColumn("ProvinceID");

            // La Altagracia
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 1, CityName = "Higüey"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 1, CityName = "Bávaro"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 1, CityName = "La Otra Banda"});

            // La Romana
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 2, CityName = "La Romana"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 2, CityName = "Villa Hermosa"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 2, CityName = "Guaymate"});

            // El Seibo
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 3, CityName = "Santa Cruz del Seibo"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 3, CityName = "Pedro Sánchez"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 3, CityName = "Miches"});

            // Hato Mayor
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 4, CityName = "Hato Mayor del Rey"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 4, CityName = "El Valle"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 4, CityName = "Sabana de la Mar"});

            // San Pedro de Macorís
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 5, CityName = "San Pedro de Macorís"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 5, CityName = "Consuelo"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 5, CityName = "Guayacanes"});

            // Monte Plata
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 6, CityName = "Monte Plata"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 6, CityName = "Bayaguana"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 6, CityName = "Yamasá"});

            // Samaná
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 7, CityName = "Santa Bárbara de Samaná"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 7, CityName = "Las Terrenas"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 7, CityName = "Sánchez"});

            // Puerto Plata
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 8, CityName = "San Felipe de Puerto Plata"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 8, CityName = "Sosúa"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 8, CityName = "Imbert"});

            // María Trinidad Sánchez
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 9, CityName = "Nagua"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 9, CityName = "Cabrera"});
            Insert.IntoTable("Cities").Row(new{CityProvinceID = 9, CityName = "El Factor"});
        }

        public override void Down()
        {
            Delete.ForeignKey("FK_Cities_Provinces").OnTable("Cities");
            Delete.Table("Cities");
        }
    }
}
