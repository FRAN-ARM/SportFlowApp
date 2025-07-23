
namespace SportFlowApp.SportFlowCustomer {

    @Serenity.Decorators.registerClass()
    export class CustomerOrdersGrid extends Serenity.EntityGrid<CustomerOrdersRow, any> {
        protected getColumnsKey() { return 'SportFlowCustomer.CustomerOrders'; }
        protected getDialogType() { return CustomerOrdersDialog; }
        protected getIdProperty() { return CustomerOrdersRow.idProperty; }
        protected getInsertPermission() { return CustomerOrdersRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomerOrdersRow.localTextPrefix; }
        protected getService() { return CustomerOrdersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons = buttons.filter(x => x.cssClass !== "add-button");
            buttons = buttons.filter(x => x.cssClass !== "column-picker-button");
            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}