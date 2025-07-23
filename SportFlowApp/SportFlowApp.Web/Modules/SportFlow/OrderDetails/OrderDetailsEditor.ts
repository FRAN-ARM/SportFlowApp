/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SportFlowApp.SportFlow {

    @Serenity.Decorators.registerClass()
    export class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailsRow> {
        protected getColumnsKey() { return "SportFlow.OrderDetails"; }
        protected getDialogType() { return OrderDetailsDialog; }
        protected getLocalTextPrefix() { return OrderDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            let productId = Q.toId(row.DetailProductId);
            if (productId == null) {
                Q.alert("Por favor selecciona un producto.");
                return false;
            }

            let product = ProductsRow.getLookup().itemById[productId];
            if (!product) {
                Q.alert("El producto seleccionado no existe en el catálogo.");
                return false;
            }

            row.DetailProductId = productId;
            row.DetailProductProductName = product.ProductName;
            row.DetailUnitPrice = product.ProductUnitPrice;
            row.DetailTotal = (row.DetailQuantity || 0) * (row.DetailUnitPrice || 0) - (row.DetailDiscount || 0);
            return true;
        }

    }
}