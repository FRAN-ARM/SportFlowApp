/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace SportFlowApp.SportFlow {

    @Serenity.Decorators.registerClass()
    export class OrderDetailsDialog extends Common.GridEditorDialog<OrderDetailsRow> {
        protected getFormKey() { return OrderDetailsForm.formKey; }
        protected getIdProperty() { return OrderDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return OrderDetailsRow.localTextPrefix; }
        protected getService() { return OrderDetailsService.baseUrl; }
        protected getDeletePermission() { return OrderDetailsRow.deletePermission; }
        protected getInsertPermission() { return OrderDetailsRow.insertPermission; }
        protected getUpdatePermission() { return OrderDetailsRow.updatePermission; }

        protected form: OrderDetailsForm;

        constructor() {
            super();

            this.form = new OrderDetailsForm(this.idPrefix);

            // Cada vez que se actualice el ProductID, se actualiza el campo de precio unitario.
            this.form.DetailProductId.changeSelect2(() => {
                var productID = Q.toId(this.form.DetailProductId.value);
                if (productID != null) {
                    const product = ProductsRow.getLookup().itemById[productID];
                    if (product) {
                        console.log("Product:", product);
                        this.form.DetailUnitPrice.set_value(product.ProductUnitPrice);
                    }
                }
            });
        }

        protected updateInterface() {
            super.updateInterface();
            this.toolbar.findButton('delete-button').hide();
        }
    }
}