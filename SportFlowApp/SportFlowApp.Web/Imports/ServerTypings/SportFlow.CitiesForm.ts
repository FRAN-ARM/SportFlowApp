namespace SportFlowApp.SportFlow {
    export interface CitiesForm {
        CityProvinceId: Serenity.LookupEditor;
        CityName: Serenity.StringEditor;
    }

    export class CitiesForm extends Serenity.PrefixedContext {
        static formKey = 'SportFlow.Cities';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CitiesForm.init)  {
                CitiesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(CitiesForm, [
                    'CityProvinceId', w0,
                    'CityName', w1
                ]);
            }
        }
    }
}

