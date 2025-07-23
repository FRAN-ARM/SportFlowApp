namespace SportFlowApp.SportFlow {
    export interface CategoriesForm {
        CategoryName: Serenity.StringEditor;
        CategoryDescription: Serenity.StringEditor;
        CategoryDateCreated: Serenity.DateEditor;
    }

    export class CategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'SportFlow.Categories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoriesForm.init)  {
                CategoriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(CategoriesForm, [
                    'CategoryName', w0,
                    'CategoryDescription', w0,
                    'CategoryDateCreated', w1
                ]);
            }
        }
    }
}

