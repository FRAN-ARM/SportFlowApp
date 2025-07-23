
namespace SportFlowApp.SportFlowCustomer {

    @Serenity.Decorators.registerClass()
    export class CustomerOrdersDialog extends Serenity.EntityDialog<CustomerOrdersRow, any> {
        protected getFormKey() { return CustomerOrdersForm.formKey; }
        protected getIdProperty() { return CustomerOrdersRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerOrdersRow.localTextPrefix; }
        protected getNameProperty() { return CustomerOrdersRow.nameProperty; }
        protected getService() { return CustomerOrdersService.baseUrl; }
        protected getDeletePermission() { return CustomerOrdersRow.deletePermission; }
        protected getInsertPermission() { return CustomerOrdersRow.insertPermission; }
        protected getUpdatePermission() { return CustomerOrdersRow.updatePermission; }

        protected form = new CustomerOrdersForm(this.idPrefix);

    }
}