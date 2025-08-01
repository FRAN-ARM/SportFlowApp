﻿
namespace SportFlowApp.SportFlow {

    @Serenity.Decorators.registerClass()
    export class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey() { return ProductsForm.formKey; }
        protected getIdProperty() { return ProductsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
        protected getNameProperty() { return ProductsRow.nameProperty; }
        protected getService() { return ProductsService.baseUrl; }
        protected getDeletePermission() { return ProductsRow.deletePermission; }
        protected getInsertPermission() { return ProductsRow.insertPermission; }
        protected getUpdatePermission() { return ProductsRow.updatePermission; }

        protected form = new ProductsForm(this.idPrefix);

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {
                const today = Q.formatDate(new Date(), "yyyy/MM/dd");
                this.form.ProductDateCreated.value = today;
            }
        }

        protected updateInterface() {
            super.updateInterface();
            this.toolbar.findButton('delete-button').hide();
        }

    }
}