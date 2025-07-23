namespace SportFlowApp.SportFlowCustomer {
    export interface CustomerOrdersRow {
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
    }

    export namespace CustomerOrdersRow {
        export const idProperty = 'OrderId';
        export const localTextPrefix = 'SportFlowCustomer.CustomerOrders';
        export const deletePermission = 'Customer:General';
        export const insertPermission = 'Customer:General';
        export const readPermission = 'Customer:General';
        export const updatePermission = 'Customer:General';

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
            OrderCityCityName = "OrderCityCityName"
        }
    }
}

