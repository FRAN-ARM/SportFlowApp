namespace SportFlowApp.SportFlow {
    export interface OrdersRow {
        OrderId?: number;
        OrderCustomerId?: number;
        OrderProvinceId?: number;
        OrderCityId?: number;
        OrderStatus?: Modules.SportFlow.Enums.OrderStatusKind;
        OrderDateCreated?: string;
        OrderCustomerCustomerUserId?: number;
        OrderCustomerCustomerName?: string;
        OrderCustomerCustomerCreditCard?: string;
        OrderCustomerCustomerDateCreated?: string;
        OrderProvinceProvinceName?: string;
        OrderCityCityProvinceId?: number;
        OrderCityCityName?: string;
        OrderAddress?: string;
        DetailsList?: OrderDetailsRow[];
    }

    export namespace OrdersRow {
        export const idProperty = 'OrderId';
        export const localTextPrefix = 'SportFlow.Orders';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            OrderId = "OrderId",
            OrderCustomerId = "OrderCustomerId",
            OrderProvinceId = "OrderProvinceId",
            OrderCityId = "OrderCityId",
            OrderStatus = "OrderStatus",
            OrderDateCreated = "OrderDateCreated",
            OrderCustomerCustomerUserId = "OrderCustomerCustomerUserId",
            OrderCustomerCustomerName = "OrderCustomerCustomerName",
            OrderCustomerCustomerCreditCard = "OrderCustomerCustomerCreditCard",
            OrderCustomerCustomerDateCreated = "OrderCustomerCustomerDateCreated",
            OrderProvinceProvinceName = "OrderProvinceProvinceName",
            OrderCityCityProvinceId = "OrderCityCityProvinceId",
            OrderCityCityName = "OrderCityCityName",
            OrderAddress = "OrderAddress",
            DetailsList = "DetailsList"
        }
    }
}

