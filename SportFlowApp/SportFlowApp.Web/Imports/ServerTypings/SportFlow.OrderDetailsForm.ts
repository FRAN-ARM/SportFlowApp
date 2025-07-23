namespace SportFlowApp.SportFlow {
    export interface OrderDetailsForm {
        DetailProductId: Serenity.LookupEditor;
        DetailUnitPrice: Serenity.DecimalEditor;
        DetailQuantity: Serenity.IntegerEditor;
        DetailDiscount: Serenity.DecimalEditor;
    }

    export class OrderDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'SportFlow.OrderDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderDetailsForm.init)  {
                OrderDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(OrderDetailsForm, [
                    'DetailProductId', w0,
                    'DetailUnitPrice', w1,
                    'DetailQuantity', w2,
                    'DetailDiscount', w1
                ]);
            }
        }
    }
}

