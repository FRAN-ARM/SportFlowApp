namespace SportFlowApp.SportFlow {
    export interface ProductsRow {
        ProductId?: number;
        ProductCategoryId?: number;
        ProductName?: string;
        ProductUnitPrice?: number;
        ProductDiscontinued?: boolean;
        ProductDateCreated?: string;
        ProductCategoryCategoryName?: string;
        ProductCategoryCategoryDescription?: string;
        ProductCategoryCategoryDateCreated?: string;
    }

    export namespace ProductsRow {
        export const idProperty = 'ProductId';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'SportFlow.Products';
        export const lookupKey = 'SportFlow.Products';

        export function getLookup(): Q.Lookup<ProductsRow> {
            return Q.getLookup<ProductsRow>('SportFlow.Products');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ProductId = "ProductId",
            ProductCategoryId = "ProductCategoryId",
            ProductName = "ProductName",
            ProductUnitPrice = "ProductUnitPrice",
            ProductDiscontinued = "ProductDiscontinued",
            ProductDateCreated = "ProductDateCreated",
            ProductCategoryCategoryName = "ProductCategoryCategoryName",
            ProductCategoryCategoryDescription = "ProductCategoryCategoryDescription",
            ProductCategoryCategoryDateCreated = "ProductCategoryCategoryDateCreated"
        }
    }
}

