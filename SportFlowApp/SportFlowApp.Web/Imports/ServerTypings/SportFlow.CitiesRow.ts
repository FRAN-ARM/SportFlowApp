namespace SportFlowApp.SportFlow {
    export interface CitiesRow {
        CityId?: number;
        CityProvinceId?: number;
        CityName?: string;
        CityProvinceProvinceName?: string;
    }

    export namespace CitiesRow {
        export const idProperty = 'CityId';
        export const nameProperty = 'CityName';
        export const localTextPrefix = 'SportFlow.Cities';
        export const lookupKey = 'SportFlow.Cities';

        export function getLookup(): Q.Lookup<CitiesRow> {
            return Q.getLookup<CitiesRow>('SportFlow.Cities');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CityId = "CityId",
            CityProvinceId = "CityProvinceId",
            CityName = "CityName",
            CityProvinceProvinceName = "CityProvinceProvinceName"
        }
    }
}

