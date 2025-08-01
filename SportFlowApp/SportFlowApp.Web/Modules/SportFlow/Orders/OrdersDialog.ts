﻿
namespace SportFlowApp.SportFlow {

    @Serenity.Decorators.registerClass()
    export class OrdersDialog extends Serenity.EntityDialog<OrdersRow, any> {
        protected getFormKey() { return OrdersForm.formKey; }
        protected getIdProperty() { return OrdersRow.idProperty; }
        protected getLocalTextPrefix() { return OrdersRow.localTextPrefix; }
        //protected getNameProperty() { return OrdersRow.nameProperty; }
        protected getService() { return OrdersService.baseUrl; }
        protected getDeletePermission() { return OrdersRow.deletePermission; }
        protected getInsertPermission() { return OrdersRow.insertPermission; }
        protected getUpdatePermission() { return OrdersRow.updatePermission; }

        protected form = new OrdersForm(this.idPrefix);

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {
                const today = Q.formatDate(new Date(), "yyyy/MM/dd");
                this.form.OrderDateCreated.value = today;
            }
        }

        protected updateInterface() {
            super.updateInterface();
            this.toolbar.findButton('delete-button').hide();
        }
    }
}