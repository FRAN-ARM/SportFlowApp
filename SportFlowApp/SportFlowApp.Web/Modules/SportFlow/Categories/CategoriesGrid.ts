
namespace SportFlowApp.SportFlow {

    @Serenity.Decorators.registerClass()
    export class CategoriesGrid extends Serenity.EntityGrid<CategoriesRow, any> {
        protected getColumnsKey() { return 'SportFlow.Categories'; }
        protected getDialogType() { return CategoriesDialog; }
        protected getIdProperty() { return CategoriesRow.idProperty; }
        protected getInsertPermission() { return CategoriesRow.insertPermission; }
        protected getLocalTextPrefix() { return CategoriesRow.localTextPrefix; }
        protected getService() { return CategoriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
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