﻿namespace SportFlowApp.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace SportFlow {

            namespace Categories {
                export const CategoryDateCreated: string;
                export const CategoryDescription: string;
                export const CategoryId: string;
                export const CategoryName: string;
            }

            namespace Cities {
                export const CityId: string;
                export const CityName: string;
                export const CityProvinceId: string;
                export const CityProvinceProvinceName: string;
            }

            namespace Customers {
                export const CustomerCreditCard: string;
                export const CustomerDateCreated: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const CustomerUserDisplayName: string;
                export const CustomerUserEmail: string;
                export const CustomerUserId: string;
                export const CustomerUserInsertDate: string;
                export const CustomerUserInsertUserId: string;
                export const CustomerUserIsActive: string;
                export const CustomerUserLastDirectoryUpdate: string;
                export const CustomerUserPasswordHash: string;
                export const CustomerUserPasswordSalt: string;
                export const CustomerUserSource: string;
                export const CustomerUserUpdateDate: string;
                export const CustomerUserUpdateUserId: string;
                export const CustomerUserUserImage: string;
                export const CustomerUserUsername: string;
                export const CustomerUsername: string;
                export const UserEmail: string;
            }

            namespace OrderDetails {
                export const DetailDiscount: string;
                export const DetailId: string;
                export const DetailOrderId: string;
                export const DetailOrderOrderCityId: string;
                export const DetailOrderOrderCustomerId: string;
                export const DetailOrderOrderDateCreated: string;
                export const DetailOrderOrderProvinceId: string;
                export const DetailOrderOrderStatus: string;
                export const DetailProductId: string;
                export const DetailProductProductCategoryId: string;
                export const DetailProductProductDateCreated: string;
                export const DetailProductProductDiscontinued: string;
                export const DetailProductProductName: string;
                export const DetailProductProductUnitPrice: string;
                export const DetailQuantity: string;
                export const DetailTotal: string;
                export const DetailUnitPrice: string;
            }

            namespace Orders {
                export const DetailsList: string;
                export const OrderAddress: string;
                export const OrderCityCityName: string;
                export const OrderCityCityProvinceId: string;
                export const OrderCityId: string;
                export const OrderCustomerCustomerCreditCard: string;
                export const OrderCustomerCustomerDateCreated: string;
                export const OrderCustomerCustomerName: string;
                export const OrderCustomerCustomerUserId: string;
                export const OrderCustomerId: string;
                export const OrderDateCreated: string;
                export const OrderId: string;
                export const OrderProvinceId: string;
                export const OrderProvinceProvinceName: string;
                export const OrderStatus: string;
            }

            namespace Products {
                export const ProductCategoryCategoryDateCreated: string;
                export const ProductCategoryCategoryDescription: string;
                export const ProductCategoryCategoryName: string;
                export const ProductCategoryId: string;
                export const ProductDateCreated: string;
                export const ProductDiscontinued: string;
                export const ProductId: string;
                export const ProductName: string;
                export const ProductUnitPrice: string;
            }

            namespace Provinces {
                export const ProvinceId: string;
                export const ProvinceName: string;
            }
        }

        namespace SportFlowCustomer {

            namespace CustomerOrders {
                export const OrderCityCityName: string;
                export const OrderCityCityProvinceId: string;
                export const OrderCityId: string;
                export const OrderCustomerCustomerCreditCard: string;
                export const OrderCustomerCustomerDateCreated: string;
                export const OrderCustomerCustomerName: string;
                export const OrderCustomerCustomerUserId: string;
                export const OrderCustomerId: string;
                export const OrderDateCreated: string;
                export const OrderId: string;
                export const OrderProvinceId: string;
                export const OrderProvinceProvinceName: string;
                export const OrderStatus: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    SportFlowApp['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},SportFlow:{Categories:{CategoryDateCreated:1,CategoryDescription:1,CategoryId:1,CategoryName:1},Cities:{CityId:1,CityName:1,CityProvinceId:1,CityProvinceProvinceName:1},Customers:{CustomerCreditCard:1,CustomerDateCreated:1,CustomerId:1,CustomerName:1,CustomerUserDisplayName:1,CustomerUserEmail:1,CustomerUserId:1,CustomerUserInsertDate:1,CustomerUserInsertUserId:1,CustomerUserIsActive:1,CustomerUserLastDirectoryUpdate:1,CustomerUserPasswordHash:1,CustomerUserPasswordSalt:1,CustomerUserSource:1,CustomerUserUpdateDate:1,CustomerUserUpdateUserId:1,CustomerUserUserImage:1,CustomerUserUsername:1,CustomerUsername:1,UserEmail:1},OrderDetails:{DetailDiscount:1,DetailId:1,DetailOrderId:1,DetailOrderOrderCityId:1,DetailOrderOrderCustomerId:1,DetailOrderOrderDateCreated:1,DetailOrderOrderProvinceId:1,DetailOrderOrderStatus:1,DetailProductId:1,DetailProductProductCategoryId:1,DetailProductProductDateCreated:1,DetailProductProductDiscontinued:1,DetailProductProductName:1,DetailProductProductUnitPrice:1,DetailQuantity:1,DetailTotal:1,DetailUnitPrice:1},Orders:{DetailsList:1,OrderAddress:1,OrderCityCityName:1,OrderCityCityProvinceId:1,OrderCityId:1,OrderCustomerCustomerCreditCard:1,OrderCustomerCustomerDateCreated:1,OrderCustomerCustomerName:1,OrderCustomerCustomerUserId:1,OrderCustomerId:1,OrderDateCreated:1,OrderId:1,OrderProvinceId:1,OrderProvinceProvinceName:1,OrderStatus:1},Products:{ProductCategoryCategoryDateCreated:1,ProductCategoryCategoryDescription:1,ProductCategoryCategoryName:1,ProductCategoryId:1,ProductDateCreated:1,ProductDiscontinued:1,ProductId:1,ProductName:1,ProductUnitPrice:1},Provinces:{ProvinceId:1,ProvinceName:1}},SportFlowCustomer:{CustomerOrders:{OrderCityCityName:1,OrderCityCityProvinceId:1,OrderCityId:1,OrderCustomerCustomerCreditCard:1,OrderCustomerCustomerDateCreated:1,OrderCustomerCustomerName:1,OrderCustomerCustomerUserId:1,OrderCustomerId:1,OrderDateCreated:1,OrderId:1,OrderProvinceId:1,OrderProvinceProvinceName:1,OrderStatus:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

