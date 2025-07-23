namespace SportFlowApp.SportFlow {
    export interface ProductsForm {
        ProductName: Serenity.StringEditor;
        ProductUnitPrice: Serenity.DecimalEditor;
        ProductCategoryId: Serenity.LookupEditor;
        ProductDiscontinued: Serenity.BooleanEditor;
        ProductDateCreated: Serenity.DateEditor;
    }

    export class ProductsForm extends Serenity.PrefixedContext {
        static formKey = 'SportFlow.Products';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductsForm.init)  {
                ProductsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.LookupEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DateEditor;

                Q.initFormType(ProductsForm, [
                    'ProductName', w0,
                    'ProductUnitPrice', w1,
                    'ProductCategoryId', w2,
                    'ProductDiscontinued', w3,
                    'ProductDateCreated', w4
                ]);
            }
        }
    }
}

