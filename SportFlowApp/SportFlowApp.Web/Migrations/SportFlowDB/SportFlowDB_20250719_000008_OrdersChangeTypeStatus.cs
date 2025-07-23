using FluentMigrator;
using System;

namespace SportFlowApp.Migrations.SportFlowDB
{
    // Cambia el tipo de dato de Status a Int32 para el uso del enum disponible en Modules/SportFlow/Orders/OrderStatus.
    [Migration(20250710000008)]
    public class SportFlow_20250710_000008_OrdersChangeTypeStatus : Migration
    {
        public override void Up()
        {
            Delete.DefaultConstraint().OnTable("Orders").OnColumn("OrderStatus");
            Delete.Column("OrderStatus").FromTable("Orders");
            Alter.Table("Orders")
                .AddColumn("OrderStatus").AsInt32().NotNullable().WithDefaultValue(0);
        }

        public override void Down()
        {
            Delete.Column("OrderStatus").FromTable("Orders");
            Alter.Table("Orders")
                .AddColumn("OrderStatus").AsString(64).NotNullable().WithDefaultValue("Pending");
        }
    }
}