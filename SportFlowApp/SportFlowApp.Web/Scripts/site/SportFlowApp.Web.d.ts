/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace SportFlowApp.Administration {
}
declare namespace SportFlowApp.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace SportFlowApp.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace SportFlowApp.Administration {
}
declare namespace SportFlowApp.Administration {
}
declare namespace SportFlowApp.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SportFlowApp.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace SportFlowApp.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace SportFlowApp.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace SportFlowApp.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace SportFlowApp.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace SportFlowApp.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace SportFlowApp.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace SportFlowApp.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace SportFlowApp.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace SportFlowApp.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace SportFlowApp.Administration {
}
declare namespace SportFlowApp.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SportFlowApp.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SportFlowApp.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace SportFlowApp.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace SportFlowApp.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace SportFlowApp.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace SportFlowApp.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SportFlowApp.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace SportFlowApp.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace SportFlowApp.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace SportFlowApp.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace SportFlowApp.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace SportFlowApp.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace SportFlowApp.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace SportFlowApp.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace SportFlowApp.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace SportFlowApp {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace SportFlowApp {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace SportFlowApp {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace SportFlowApp {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace SportFlowApp.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SportFlowApp.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace SportFlowApp.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace SportFlowApp.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SportFlowApp.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace SportFlowApp.Modules.SportFlow.Enums {
    enum OrderStatusKind {
        Pending = 0,
        Canceled = 1,
        Completed = 2
    }
}
declare namespace SportFlowApp {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace SportFlowApp.SportFlow {
}
declare namespace SportFlowApp.SportFlow {
    interface CategoriesForm {
        CategoryName: Serenity.StringEditor;
        CategoryDescription: Serenity.StringEditor;
        CategoryDateCreated: Serenity.DateEditor;
    }
    class CategoriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.SportFlow {
    interface CategoriesRow {
        CategoryId?: number;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryDateCreated?: string;
    }
    namespace CategoriesRow {
        const idProperty = "CategoryId";
        const nameProperty = "CategoryName";
        const localTextPrefix = "SportFlow.Categories";
        const lookupKey = "SportFlow.Categories";
        function getLookup(): Q.Lookup<CategoriesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryDateCreated = "CategoryDateCreated"
        }
    }
}
declare namespace SportFlowApp.SportFlow {
    namespace CategoriesService {
        const baseUrl = "SportFlow/Categories";
        function Create(request: Serenity.SaveRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SportFlow/Categories/Create",
            Update = "SportFlow/Categories/Update",
            Delete = "SportFlow/Categories/Delete",
            Retrieve = "SportFlow/Categories/Retrieve",
            List = "SportFlow/Categories/List"
        }
    }
}
declare namespace SportFlowApp.SportFlow {
}
declare namespace SportFlowApp.SportFlow {
    interface CitiesForm {
        CityProvinceId: Serenity.LookupEditor;
        CityName: Serenity.StringEditor;
    }
    class CitiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.SportFlow {
    interface CitiesRow {
        CityId?: number;
        CityProvinceId?: number;
        CityName?: string;
        CityProvinceProvinceName?: string;
    }
    namespace CitiesRow {
        const idProperty = "CityId";
        const nameProperty = "CityName";
        const localTextPrefix = "SportFlow.Cities";
        const lookupKey = "SportFlow.Cities";
        function getLookup(): Q.Lookup<CitiesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CityId = "CityId",
            CityProvinceId = "CityProvinceId",
            CityName = "CityName",
            CityProvinceProvinceName = "CityProvinceProvinceName"
        }
    }
}
declare namespace SportFlowApp.SportFlow {
    namespace CitiesService {
        const baseUrl = "SportFlow/Cities";
        function Create(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SportFlow/Cities/Create",
            Update = "SportFlow/Cities/Update",
            Delete = "SportFlow/Cities/Delete",
            Retrieve = "SportFlow/Cities/Retrieve",
            List = "SportFlow/Cities/List"
        }
    }
}
declare namespace SportFlowApp.SportFlow {
}
declare namespace SportFlowApp.SportFlow {
    interface CustomersForm {
        CustomerUsername: Serenity.StringEditor;
        CustomerName: Serenity.StringEditor;
        UserEmail: Serenity.EmailEditor;
        CustomerCreditCard: Serenity.StringEditor;
        CustomerDateCreated: Serenity.DateEditor;
    }
    class CustomersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.SportFlow {
    interface CustomersRow {
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
    namespace CustomersRow {
        const idProperty = "CustomerId";
        const nameProperty = "CustomerName";
        const localTextPrefix = "SportFlow.Customers";
        const lookupKey = "SportFlow.Customers";
        function getLookup(): Q.Lookup<CustomersRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace SportFlowApp.SportFlow {
    namespace CustomersService {
        const baseUrl = "SportFlow/Customers";
        function Create(request: Serenity.SaveRequest<CustomersForm>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SportFlow/Customers/Create",
            Update = "SportFlow/Customers/Update",
            Delete = "SportFlow/Customers/Delete",
            Retrieve = "SportFlow/Customers/Retrieve",
            List = "SportFlow/Customers/List"
        }
    }
}
declare namespace SportFlowApp.SportFlow {
}
declare namespace SportFlowApp.SportFlow {
    interface OrderDetailsForm {
        DetailProductId: Serenity.LookupEditor;
        DetailUnitPrice: Serenity.DecimalEditor;
        DetailQuantity: Serenity.IntegerEditor;
        DetailDiscount: Serenity.DecimalEditor;
    }
    class OrderDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.SportFlow {
    interface OrderDetailsRow {
        DetailId?: number;
        DetailOrderId?: number;
        DetailProductId?: number;
        DetailQuantity?: number;
        DetailUnitPrice?: number;
        DetailDiscount?: number;
        DetailOrderOrderCustomerId?: number;
        DetailOrderOrderProvinceId?: number;
        DetailOrderOrderCityId?: number;
        DetailOrderOrderStatus?: string;
        DetailOrderOrderDateCreated?: string;
        DetailProductProductCategoryId?: number;
        DetailProductProductName?: string;
        DetailProductProductUnitPrice?: number;
        DetailProductProductDiscontinued?: boolean;
        DetailProductProductDateCreated?: string;
        DetailTotal?: number;
    }
    namespace OrderDetailsRow {
        const idProperty = "DetailId";
        const localTextPrefix = "SportFlow.OrderDetails";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            DetailId = "DetailId",
            DetailOrderId = "DetailOrderId",
            DetailProductId = "DetailProductId",
            DetailQuantity = "DetailQuantity",
            DetailUnitPrice = "DetailUnitPrice",
            DetailDiscount = "DetailDiscount",
            DetailOrderOrderCustomerId = "DetailOrderOrderCustomerId",
            DetailOrderOrderProvinceId = "DetailOrderOrderProvinceId",
            DetailOrderOrderCityId = "DetailOrderOrderCityId",
            DetailOrderOrderStatus = "DetailOrderOrderStatus",
            DetailOrderOrderDateCreated = "DetailOrderOrderDateCreated",
            DetailProductProductCategoryId = "DetailProductProductCategoryId",
            DetailProductProductName = "DetailProductProductName",
            DetailProductProductUnitPrice = "DetailProductProductUnitPrice",
            DetailProductProductDiscontinued = "DetailProductProductDiscontinued",
            DetailProductProductDateCreated = "DetailProductProductDateCreated",
            DetailTotal = "DetailTotal"
        }
    }
}
declare namespace SportFlowApp.SportFlow {
    namespace OrderDetailsService {
        const baseUrl = "SportFlow/OrderDetails";
        function Create(request: Serenity.SaveRequest<OrderDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SportFlow/OrderDetails/Create",
            Update = "SportFlow/OrderDetails/Update",
            Delete = "SportFlow/OrderDetails/Delete",
            Retrieve = "SportFlow/OrderDetails/Retrieve",
            List = "SportFlow/OrderDetails/List"
        }
    }
}
declare namespace SportFlowApp.SportFlow {
}
declare namespace SportFlowApp.SportFlow {
    interface OrdersForm {
        OrderCustomerId: Serenity.LookupEditor;
        OrderProvinceId: Serenity.LookupEditor;
        OrderCityId: Serenity.LookupEditor;
        OrderStatus: Serenity.EnumEditor;
        DetailsList: OrderDetailsEditor;
        OrderDateCreated: Serenity.DateEditor;
    }
    class OrdersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.SportFlow {
    interface OrdersRow {
        OrderId?: number;
        OrderCustomerId?: number;
        OrderProvinceId?: number;
        OrderCityId?: number;
        OrderStatus?: Modules.SportFlow.Enums.OrderStatusKind;
        OrderDateCreated?: string;
        OrderCustomerCustomerUserId?: number;
        OrderCustomerCustomerName?: string;
        OrderCustomerCustomerCreditCard?: string;
        OrderCustomerCustomerDateCreated?: string;
        OrderProvinceProvinceName?: string;
        OrderCityCityProvinceId?: number;
        OrderCityCityName?: string;
        OrderAddress?: string;
        DetailsList?: OrderDetailsRow[];
    }
    namespace OrdersRow {
        const idProperty = "OrderId";
        const localTextPrefix = "SportFlow.Orders";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            OrderId = "OrderId",
            OrderCustomerId = "OrderCustomerId",
            OrderProvinceId = "OrderProvinceId",
            OrderCityId = "OrderCityId",
            OrderStatus = "OrderStatus",
            OrderDateCreated = "OrderDateCreated",
            OrderCustomerCustomerUserId = "OrderCustomerCustomerUserId",
            OrderCustomerCustomerName = "OrderCustomerCustomerName",
            OrderCustomerCustomerCreditCard = "OrderCustomerCustomerCreditCard",
            OrderCustomerCustomerDateCreated = "OrderCustomerCustomerDateCreated",
            OrderProvinceProvinceName = "OrderProvinceProvinceName",
            OrderCityCityProvinceId = "OrderCityCityProvinceId",
            OrderCityCityName = "OrderCityCityName",
            OrderAddress = "OrderAddress",
            DetailsList = "DetailsList"
        }
    }
}
declare namespace SportFlowApp.SportFlow {
    namespace OrdersService {
        const baseUrl = "SportFlow/Orders";
        function Create(request: Serenity.SaveRequest<OrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SportFlow/Orders/Create",
            Update = "SportFlow/Orders/Update",
            Delete = "SportFlow/Orders/Delete",
            Retrieve = "SportFlow/Orders/Retrieve",
            List = "SportFlow/Orders/List"
        }
    }
}
declare namespace SportFlowApp.SportFlow {
}
declare namespace SportFlowApp.SportFlow {
    interface ProductsForm {
        ProductName: Serenity.StringEditor;
        ProductUnitPrice: Serenity.DecimalEditor;
        ProductCategoryId: Serenity.LookupEditor;
        ProductDiscontinued: Serenity.BooleanEditor;
        ProductDateCreated: Serenity.DateEditor;
    }
    class ProductsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.SportFlow {
    interface ProductsRow {
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
    namespace ProductsRow {
        const idProperty = "ProductId";
        const nameProperty = "ProductName";
        const localTextPrefix = "SportFlow.Products";
        const lookupKey = "SportFlow.Products";
        function getLookup(): Q.Lookup<ProductsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace SportFlowApp.SportFlow {
    namespace ProductsService {
        const baseUrl = "SportFlow/Products";
        function Create(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SportFlow/Products/Create",
            Update = "SportFlow/Products/Update",
            Delete = "SportFlow/Products/Delete",
            Retrieve = "SportFlow/Products/Retrieve",
            List = "SportFlow/Products/List"
        }
    }
}
declare namespace SportFlowApp.SportFlow {
}
declare namespace SportFlowApp.SportFlow {
    interface ProvincesForm {
        ProvinceName: Serenity.StringEditor;
    }
    class ProvincesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SportFlowApp.SportFlow {
    interface ProvincesRow {
        ProvinceId?: number;
        ProvinceName?: string;
    }
    namespace ProvincesRow {
        const idProperty = "ProvinceId";
        const nameProperty = "ProvinceName";
        const localTextPrefix = "SportFlow.Provinces";
        const lookupKey = "SportFlow.Provinces";
        function getLookup(): Q.Lookup<ProvincesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ProvinceId = "ProvinceId",
            ProvinceName = "ProvinceName"
        }
    }
}
declare namespace SportFlowApp.SportFlow {
    namespace ProvincesService {
        const baseUrl = "SportFlow/Provinces";
        function Create(request: Serenity.SaveRequest<ProvincesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProvincesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProvincesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProvincesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SportFlow/Provinces/Create",
            Update = "SportFlow/Provinces/Update",
            Delete = "SportFlow/Provinces/Delete",
            Retrieve = "SportFlow/Provinces/Retrieve",
            List = "SportFlow/Provinces/List"
        }
    }
}
declare namespace SportFlowApp.SportFlowCustomer {
}
declare namespace SportFlowApp.SportFlowCustomer {
    interface CustomerOrdersForm {
    }
    class CustomerOrdersForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
}
declare namespace SportFlowApp.SportFlowCustomer {
    interface CustomerOrdersRow {
        OrderId?: number;
        OrderCustomerId?: number;
        OrderProvinceId?: number;
        OrderCityId?: number;
        OrderStatus?: Modules.SportFlow.Enums.OrderStatusKind;
        OrderDateCreated?: string;
        OrderCustomerCustomerUserId?: number;
        OrderCustomerCustomerName?: string;
        OrderCustomerCustomerCreditCard?: string;
        OrderCustomerCustomerDateCreated?: string;
        OrderProvinceProvinceName?: string;
        OrderCityCityProvinceId?: number;
        OrderCityCityName?: string;
    }
    namespace CustomerOrdersRow {
        const idProperty = "OrderId";
        const localTextPrefix = "SportFlowCustomer.CustomerOrders";
        const deletePermission = "Customer:General";
        const insertPermission = "Customer:General";
        const readPermission = "Customer:General";
        const updatePermission = "Customer:General";
        const enum Fields {
            OrderId = "OrderId",
            OrderCustomerId = "OrderCustomerId",
            OrderProvinceId = "OrderProvinceId",
            OrderCityId = "OrderCityId",
            OrderStatus = "OrderStatus",
            OrderDateCreated = "OrderDateCreated",
            OrderCustomerCustomerUserId = "OrderCustomerCustomerUserId",
            OrderCustomerCustomerName = "OrderCustomerCustomerName",
            OrderCustomerCustomerCreditCard = "OrderCustomerCustomerCreditCard",
            OrderCustomerCustomerDateCreated = "OrderCustomerCustomerDateCreated",
            OrderProvinceProvinceName = "OrderProvinceProvinceName",
            OrderCityCityProvinceId = "OrderCityCityProvinceId",
            OrderCityCityName = "OrderCityCityName"
        }
    }
}
declare namespace SportFlowApp.SportFlowCustomer {
    namespace CustomerOrdersService {
        const baseUrl = "SportFlowCustomer/CustomerOrders";
        function Create(request: Serenity.SaveRequest<CustomerOrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerOrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerOrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerOrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "SportFlowCustomer/CustomerOrders/Create",
            Update = "SportFlowCustomer/CustomerOrders/Update",
            Delete = "SportFlowCustomer/CustomerOrders/Delete",
            Retrieve = "SportFlowCustomer/CustomerOrders/Retrieve",
            List = "SportFlowCustomer/CustomerOrders/List"
        }
    }
}
declare namespace SportFlowApp.Texts {
}
declare namespace SportFlowApp.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace SportFlowApp.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace SportFlowApp.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SportFlowApp.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace SportFlowApp.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace SportFlowApp.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace SportFlowApp.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SportFlowApp.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace SportFlowApp.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace SportFlowApp.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SportFlowApp.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SportFlowApp.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace SportFlowApp.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace SportFlowApp.LanguageList {
    function getValue(): string[][];
}
declare namespace SportFlowApp.ScriptInitialization {
}
declare namespace SportFlowApp {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace SportFlowApp.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace SportFlowApp.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace SportFlowApp.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace SportFlowApp.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace SportFlowApp.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SportFlowApp.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace SportFlowApp {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace SportFlowApp.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace SportFlowApp.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace SportFlowApp.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace SportFlowApp.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace SportFlowApp.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace SportFlowApp.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace SportFlowApp.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace SportFlowApp.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace SportFlowApp.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace SportFlowApp.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SportFlowApp.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SportFlowApp.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SportFlowApp.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SportFlowApp.SportFlow {
    class CategoriesDialog extends Serenity.EntityDialog<CategoriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CategoriesForm;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
    }
}
declare namespace SportFlowApp.SportFlow {
    class CategoriesGrid extends Serenity.EntityGrid<CategoriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SportFlowApp.SportFlow {
    class CitiesDialog extends Serenity.EntityDialog<CitiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CitiesForm;
    }
}
declare namespace SportFlowApp.SportFlow {
    class CitiesGrid extends Serenity.EntityGrid<CitiesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CitiesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SportFlowApp.SportFlow {
    class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomersForm;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
    }
}
declare namespace SportFlowApp.SportFlow {
    class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SportFlowApp.SportFlow {
    class OrderDetailsDialog extends Common.GridEditorDialog<OrderDetailsRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OrderDetailsForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace SportFlowApp.SportFlow {
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SportFlowApp.SportFlow {
    class OrderDetailsGrid extends Serenity.EntityGrid<OrderDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SportFlowApp.SportFlow {
    class OrdersDialog extends Serenity.EntityDialog<OrdersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OrdersForm;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
    }
}
declare namespace SportFlowApp.SportFlow {
    class OrdersGrid extends Serenity.EntityGrid<OrdersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrdersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SportFlowApp.SportFlow {
    class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProductsForm;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
    }
}
declare namespace SportFlowApp.SportFlow {
    class ProductsGrid extends Serenity.EntityGrid<ProductsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SportFlowApp.SportFlow {
    class ProvincesDialog extends Serenity.EntityDialog<ProvincesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProvincesForm;
    }
}
declare namespace SportFlowApp.SportFlow {
    class ProvincesGrid extends Serenity.EntityGrid<ProvincesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProvincesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SportFlowApp.SportFlowCustomer {
    class CustomerOrdersDialog extends Serenity.EntityDialog<CustomerOrdersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): any;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomerOrdersForm;
    }
}
declare namespace SportFlowApp.SportFlowCustomer {
    class CustomerOrdersGrid extends Serenity.EntityGrid<CustomerOrdersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerOrdersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
