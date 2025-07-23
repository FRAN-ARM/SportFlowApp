
namespace SportFlowApp.SportFlow {

    @Serenity.Decorators.registerClass()
    export class ProvincesGrid extends Serenity.EntityGrid<ProvincesRow, any> {
        protected getColumnsKey() { return 'SportFlow.Provinces'; }
        protected getDialogType() { return ProvincesDialog; }
        protected getIdProperty() { return ProvincesRow.idProperty; }
        protected getInsertPermission() { return ProvincesRow.insertPermission; }
        protected getLocalTextPrefix() { return ProvincesRow.localTextPrefix; }
        protected getService() { return ProvincesService.baseUrl; }

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