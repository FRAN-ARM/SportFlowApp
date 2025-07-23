namespace SportFlowApp.SportFlow {
    export interface ProvincesRow {
        ProvinceId?: number;
        ProvinceName?: string;
    }

    export namespace ProvincesRow {
        export const idProperty = 'ProvinceId';
        export const nameProperty = 'ProvinceName';
        export const localTextPrefix = 'SportFlow.Provinces';
        export const lookupKey = 'SportFlow.Provinces';

        export function getLookup(): Q.Lookup<ProvincesRow> {
            return Q.getLookup<ProvincesRow>('SportFlow.Provinces');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ProvinceId = "ProvinceId",
            ProvinceName = "ProvinceName"
        }
    }
}

