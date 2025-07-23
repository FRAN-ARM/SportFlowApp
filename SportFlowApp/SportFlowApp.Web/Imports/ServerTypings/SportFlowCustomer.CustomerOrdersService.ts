namespace SportFlowApp.SportFlowCustomer {
    export namespace CustomerOrdersService {
        export const baseUrl = 'SportFlowCustomer/CustomerOrders';

        export declare function Create(request: Serenity.SaveRequest<CustomerOrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CustomerOrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerOrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerOrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "SportFlowCustomer/CustomerOrders/Create",
            Update = "SportFlowCustomer/CustomerOrders/Update",
            Delete = "SportFlowCustomer/CustomerOrders/Delete",
            Retrieve = "SportFlowCustomer/CustomerOrders/Retrieve",
            List = "SportFlowCustomer/CustomerOrders/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CustomerOrdersService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

