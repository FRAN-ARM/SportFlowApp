namespace SportFlowApp.SportFlow {
    export interface CustomersRow {
        CustomerId?: number;
        CustomerUserId?: number;
        CustomerName?: string;
        CustomerCreditCard?: string;
        CustomerDateCreated?: string;
        CustomerUserUsername?: string;
        CustomerUserDisplayName?: string;
        CustomerUserEmail?: string;
        CustomerUserSource?: string;
        CustomerUserPasswordHash?: string;
        CustomerUserPasswordSalt?: string;
        CustomerUserLastDirectoryUpdate?: string;
        CustomerUserUserImage?: string;
        CustomerUserInsertDate?: string;
        CustomerUserInsertUserId?: number;
        CustomerUserUpdateDate?: string;
        CustomerUserUpdateUserId?: number;
        CustomerUserIsActive?: number;
        CustomerUsername?: string;
        UserEmail?: string;
    }

    export namespace CustomersRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'CustomerName';
        export const localTextPrefix = 'SportFlow.Customers';
        export const lookupKey = 'SportFlow.Customers';

        export function getLookup(): Q.Lookup<CustomersRow> {
            return Q.getLookup<CustomersRow>('SportFlow.Customers');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CustomerId = "CustomerId",
            CustomerUserId = "CustomerUserId",
            CustomerName = "CustomerName",
            CustomerCreditCard = "CustomerCreditCard",
            CustomerDateCreated = "CustomerDateCreated",
            CustomerUserUsername = "CustomerUserUsername",
            CustomerUserDisplayName = "CustomerUserDisplayName",
            CustomerUserEmail = "CustomerUserEmail",
            CustomerUserSource = "CustomerUserSource",
            CustomerUserPasswordHash = "CustomerUserPasswordHash",
            CustomerUserPasswordSalt = "CustomerUserPasswordSalt",
            CustomerUserLastDirectoryUpdate = "CustomerUserLastDirectoryUpdate",
            CustomerUserUserImage = "CustomerUserUserImage",
            CustomerUserInsertDate = "CustomerUserInsertDate",
            CustomerUserInsertUserId = "CustomerUserInsertUserId",
            CustomerUserUpdateDate = "CustomerUserUpdateDate",
            CustomerUserUpdateUserId = "CustomerUserUpdateUserId",
            CustomerUserIsActive = "CustomerUserIsActive",
            CustomerUsername = "CustomerUsername",
            UserEmail = "UserEmail"
        }
    }
}

