namespace SportFlowApp.SportFlow {
    export interface OrdersForm {
        OrderCustomerId: Serenity.LookupEditor;
        OrderProvinceId: Serenity.LookupEditor;
        OrderCityId: Serenity.LookupEditor;
        OrderStatus: Serenity.EnumEditor;
        DetailsList: OrderDetailsEditor;
        OrderDateCreated: Serenity.DateEditor;
    }

    export class OrdersForm extends Serenity.PrefixedContext {
        static formKey = 'SportFlow.Orders';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrdersForm.init)  {
                OrdersForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.EnumEditor;
                var w2 = OrderDetailsEditor;
                var w3 = s.DateEditor;

                Q.initFormType(OrdersForm, [
                    'OrderCustomerId', w0,
                    'OrderProvinceId', w0,
                    'OrderCityId', w0,
                    'OrderStatus', w1,
                    'DetailsList', w2,
                    'OrderDateCreated', w3
                ]);
            }
        }
    }
}

