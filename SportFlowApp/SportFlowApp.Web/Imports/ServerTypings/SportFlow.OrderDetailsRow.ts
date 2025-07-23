namespace SportFlowApp.SportFlow {
    export interface OrderDetailsRow {
        DetailId?: number;
        DetailOrderId?: number;
        DetailProductId?: number;
        DetailQuantity?: number;
        DetailUnitPrice?: number;
        DetailDiscount?: number;
        DetailOrderOrderCustomerId?: number;
        DetailOrderOrderProvinceId?: number;
        DetailOrderOrderCityId?: number;
        DetailOrderOrderStatus?: string;
        DetailOrderOrderDateCreated?: string;
        DetailProductProductCategoryId?: number;
        DetailProductProductName?: string;
        DetailProductProductUnitPrice?: number;
        DetailProductProductDiscontinued?: boolean;
        DetailProductProductDateCreated?: string;
        DetailTotal?: number;
    }

    export namespace OrderDetailsRow {
        export const idProperty = 'DetailId';
        export const localTextPrefix = 'SportFlow.OrderDetails';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            DetailId = "DetailId",
            DetailOrderId = "DetailOrderId",
            DetailProductId = "DetailProductId",
            DetailQuantity = "DetailQuantity",
            DetailUnitPrice = "DetailUnitPrice",
            DetailDiscount = "DetailDiscount",
            DetailOrderOrderCustomerId = "DetailOrderOrderCustomerId",
            DetailOrderOrderProvinceId = "DetailOrderOrderProvinceId",
            DetailOrderOrderCityId = "DetailOrderOrderCityId",
            DetailOrderOrderStatus = "DetailOrderOrderStatus",
            DetailOrderOrderDateCreated = "DetailOrderOrderDateCreated",
            DetailProductProductCategoryId = "DetailProductProductCategoryId",
            DetailProductProductName = "DetailProductProductName",
            DetailProductProductUnitPrice = "DetailProductProductUnitPrice",
            DetailProductProductDiscontinued = "DetailProductProductDiscontinued",
            DetailProductProductDateCreated = "DetailProductProductDateCreated",
            DetailTotal = "DetailTotal"
        }
    }
}

