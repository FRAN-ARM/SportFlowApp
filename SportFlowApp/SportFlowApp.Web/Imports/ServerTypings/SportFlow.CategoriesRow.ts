namespace SportFlowApp.SportFlow {
    export interface CategoriesRow {
        CategoryId?: number;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryDateCreated?: string;
    }

    export namespace CategoriesRow {
        export const idProperty = 'CategoryId';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'SportFlow.Categories';
        export const lookupKey = 'SportFlow.Categories';

        export function getLookup(): Q.Lookup<CategoriesRow> {
            return Q.getLookup<CategoriesRow>('SportFlow.Categories');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryDateCreated = "CategoryDateCreated"
        }
    }
}

