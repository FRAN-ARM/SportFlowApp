namespace SportFlowApp.SportFlow {
    export interface CustomersForm {
        CustomerUsername: Serenity.StringEditor;
        CustomerName: Serenity.StringEditor;
        UserEmail: Serenity.EmailEditor;
        CustomerCreditCard: Serenity.StringEditor;
        CustomerDateCreated: Serenity.DateEditor;
    }

    export class CustomersForm extends Serenity.PrefixedContext {
        static formKey = 'SportFlow.Customers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomersForm.init)  {
                CustomersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailEditor;
                var w2 = s.DateEditor;

                Q.initFormType(CustomersForm, [
                    'CustomerUsername', w0,
                    'CustomerName', w0,
                    'UserEmail', w1,
                    'CustomerCreditCard', w0,
                    'CustomerDateCreated', w2
                ]);
            }
        }
    }
}

