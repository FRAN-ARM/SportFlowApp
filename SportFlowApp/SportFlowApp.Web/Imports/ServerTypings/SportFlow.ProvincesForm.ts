namespace SportFlowApp.SportFlow {
    export interface ProvincesForm {
        ProvinceName: Serenity.StringEditor;
    }

    export class ProvincesForm extends Serenity.PrefixedContext {
        static formKey = 'SportFlow.Provinces';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProvincesForm.init)  {
                ProvincesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ProvincesForm, [
                    'ProvinceName', w0
                ]);
            }
        }
    }
}

