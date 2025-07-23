
namespace SportFlowApp.SportFlow {

    @Serenity.Decorators.registerClass()
    export class ProductsGrid extends Serenity.EntityGrid<ProductsRow, any> {
        protected getColumnsKey() { return 'SportFlow.Products'; }
        protected getDialogType() { return ProductsDialog; }
        protected getIdProperty() { return ProductsRow.idProperty; }
        protected getInsertPermission() { return ProductsRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
        protected getService() { return ProductsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

            //this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}