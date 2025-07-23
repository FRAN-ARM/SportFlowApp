
namespace SportFlowApp.SportFlow {

    @Serenity.Decorators.registerClass()
    export class CategoriesDialog extends Serenity.EntityDialog<CategoriesRow, any> {
        protected getFormKey() { return CategoriesForm.formKey; }
        protected getIdProperty() { return CategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return CategoriesRow.localTextPrefix; }
        protected getNameProperty() { return CategoriesRow.nameProperty; }
        protected getService() { return CategoriesService.baseUrl; }
        protected getDeletePermission() { return CategoriesRow.deletePermission; }
        protected getInsertPermission() { return CategoriesRow.insertPermission; }
        protected getUpdatePermission() { return CategoriesRow.updatePermission; }

        protected form = new CategoriesForm(this.idPrefix);

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {
                const today = Q.formatDate(new Date(), "yyyy/MM/dd");
                this.form.CategoryDateCreated.value = today;
            }
        }

        protected updateInterface() {
            super.updateInterface();
            this.toolbar.findButton('delete-button').hide();
        }
    }
}