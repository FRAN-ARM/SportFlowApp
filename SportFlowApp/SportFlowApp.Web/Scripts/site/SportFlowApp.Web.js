﻿var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = SportFlowApp.Membership || (SportFlowApp.Membership = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = SportFlowApp.Membership || (SportFlowApp.Membership = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = SportFlowApp.Membership || (SportFlowApp.Membership = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = SportFlowApp.Membership || (SportFlowApp.Membership = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = SportFlowApp.Membership || (SportFlowApp.Membership = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Modules;
    (function (Modules) {
        var SportFlow;
        (function (SportFlow) {
            var Enums;
            (function (Enums) {
                var OrderStatusKind;
                (function (OrderStatusKind) {
                    OrderStatusKind[OrderStatusKind["Pending"] = 0] = "Pending";
                    OrderStatusKind[OrderStatusKind["Canceled"] = 1] = "Canceled";
                    OrderStatusKind[OrderStatusKind["Completed"] = 2] = "Completed";
                })(OrderStatusKind = Enums.OrderStatusKind || (Enums.OrderStatusKind = {}));
                Serenity.Decorators.registerEnumType(OrderStatusKind, 'SportFlowApp.Modules.SportFlow.Enums.OrderStatusKind', 'SportFlow.OrderStatusKind');
            })(Enums = SportFlow.Enums || (SportFlow.Enums = {}));
        })(SportFlow = Modules.SportFlow || (Modules.SportFlow = {}));
    })(Modules = SportFlowApp.Modules || (SportFlowApp.Modules = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CategoriesForm = /** @class */ (function (_super) {
            __extends(CategoriesForm, _super);
            function CategoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoriesForm.init) {
                    CategoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(CategoriesForm, [
                        'CategoryName', w0,
                        'CategoryDescription', w0,
                        'CategoryDateCreated', w1
                    ]);
                }
                return _this;
            }
            CategoriesForm.formKey = 'SportFlow.Categories';
            return CategoriesForm;
        }(Serenity.PrefixedContext));
        SportFlow.CategoriesForm = CategoriesForm;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CategoriesRow;
        (function (CategoriesRow) {
            CategoriesRow.idProperty = 'CategoryId';
            CategoriesRow.nameProperty = 'CategoryName';
            CategoriesRow.localTextPrefix = 'SportFlow.Categories';
            CategoriesRow.lookupKey = 'SportFlow.Categories';
            function getLookup() {
                return Q.getLookup('SportFlow.Categories');
            }
            CategoriesRow.getLookup = getLookup;
            CategoriesRow.deletePermission = 'Administration:General';
            CategoriesRow.insertPermission = 'Administration:General';
            CategoriesRow.readPermission = 'Administration:General';
            CategoriesRow.updatePermission = 'Administration:General';
        })(CategoriesRow = SportFlow.CategoriesRow || (SportFlow.CategoriesRow = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CategoriesService;
        (function (CategoriesService) {
            CategoriesService.baseUrl = 'SportFlow/Categories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoriesService = SportFlow.CategoriesService || (SportFlow.CategoriesService = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CitiesForm = /** @class */ (function (_super) {
            __extends(CitiesForm, _super);
            function CitiesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CitiesForm.init) {
                    CitiesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(CitiesForm, [
                        'CityProvinceId', w0,
                        'CityName', w1
                    ]);
                }
                return _this;
            }
            CitiesForm.formKey = 'SportFlow.Cities';
            return CitiesForm;
        }(Serenity.PrefixedContext));
        SportFlow.CitiesForm = CitiesForm;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CitiesRow;
        (function (CitiesRow) {
            CitiesRow.idProperty = 'CityId';
            CitiesRow.nameProperty = 'CityName';
            CitiesRow.localTextPrefix = 'SportFlow.Cities';
            CitiesRow.lookupKey = 'SportFlow.Cities';
            function getLookup() {
                return Q.getLookup('SportFlow.Cities');
            }
            CitiesRow.getLookup = getLookup;
            CitiesRow.deletePermission = 'Administration:General';
            CitiesRow.insertPermission = 'Administration:General';
            CitiesRow.readPermission = 'Administration:General';
            CitiesRow.updatePermission = 'Administration:General';
        })(CitiesRow = SportFlow.CitiesRow || (SportFlow.CitiesRow = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CitiesService;
        (function (CitiesService) {
            CitiesService.baseUrl = 'SportFlow/Cities';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CitiesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CitiesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CitiesService = SportFlow.CitiesService || (SportFlow.CitiesService = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CustomersForm = /** @class */ (function (_super) {
            __extends(CustomersForm, _super);
            function CustomersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomersForm.init) {
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
                return _this;
            }
            CustomersForm.formKey = 'SportFlow.Customers';
            return CustomersForm;
        }(Serenity.PrefixedContext));
        SportFlow.CustomersForm = CustomersForm;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CustomersRow;
        (function (CustomersRow) {
            CustomersRow.idProperty = 'CustomerId';
            CustomersRow.nameProperty = 'CustomerName';
            CustomersRow.localTextPrefix = 'SportFlow.Customers';
            CustomersRow.lookupKey = 'SportFlow.Customers';
            function getLookup() {
                return Q.getLookup('SportFlow.Customers');
            }
            CustomersRow.getLookup = getLookup;
            CustomersRow.deletePermission = 'Administration:General';
            CustomersRow.insertPermission = 'Administration:General';
            CustomersRow.readPermission = 'Administration:General';
            CustomersRow.updatePermission = 'Administration:General';
        })(CustomersRow = SportFlow.CustomersRow || (SportFlow.CustomersRow = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CustomersService;
        (function (CustomersService) {
            CustomersService.baseUrl = 'SportFlow/Customers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomersService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomersService = SportFlow.CustomersService || (SportFlow.CustomersService = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var OrderDetailsForm = /** @class */ (function (_super) {
            __extends(OrderDetailsForm, _super);
            function OrderDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderDetailsForm.init) {
                    OrderDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(OrderDetailsForm, [
                        'DetailProductId', w0,
                        'DetailUnitPrice', w1,
                        'DetailQuantity', w2,
                        'DetailDiscount', w1
                    ]);
                }
                return _this;
            }
            OrderDetailsForm.formKey = 'SportFlow.OrderDetails';
            return OrderDetailsForm;
        }(Serenity.PrefixedContext));
        SportFlow.OrderDetailsForm = OrderDetailsForm;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var OrderDetailsRow;
        (function (OrderDetailsRow) {
            OrderDetailsRow.idProperty = 'DetailId';
            OrderDetailsRow.localTextPrefix = 'SportFlow.OrderDetails';
            OrderDetailsRow.deletePermission = 'Administration:General';
            OrderDetailsRow.insertPermission = 'Administration:General';
            OrderDetailsRow.readPermission = 'Administration:General';
            OrderDetailsRow.updatePermission = 'Administration:General';
        })(OrderDetailsRow = SportFlow.OrderDetailsRow || (SportFlow.OrderDetailsRow = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var OrderDetailsService;
        (function (OrderDetailsService) {
            OrderDetailsService.baseUrl = 'SportFlow/OrderDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderDetailsService = SportFlow.OrderDetailsService || (SportFlow.OrderDetailsService = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var OrdersForm = /** @class */ (function (_super) {
            __extends(OrdersForm, _super);
            function OrdersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrdersForm.init) {
                    OrdersForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.EnumEditor;
                    var w2 = SportFlow.OrderDetailsEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(OrdersForm, [
                        'OrderCustomerId', w0,
                        'OrderProvinceId', w0,
                        'OrderCityId', w0,
                        'OrderStatus', w1,
                        'DetailsList', w2,
                        'OrderDateCreated', w3
                    ]);
                }
                return _this;
            }
            OrdersForm.formKey = 'SportFlow.Orders';
            return OrdersForm;
        }(Serenity.PrefixedContext));
        SportFlow.OrdersForm = OrdersForm;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var OrdersRow;
        (function (OrdersRow) {
            OrdersRow.idProperty = 'OrderId';
            OrdersRow.localTextPrefix = 'SportFlow.Orders';
            OrdersRow.deletePermission = 'Administration:General';
            OrdersRow.insertPermission = 'Administration:General';
            OrdersRow.readPermission = 'Administration:General';
            OrdersRow.updatePermission = 'Administration:General';
        })(OrdersRow = SportFlow.OrdersRow || (SportFlow.OrdersRow = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var OrdersService;
        (function (OrdersService) {
            OrdersService.baseUrl = 'SportFlow/Orders';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrdersService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrdersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrdersService = SportFlow.OrdersService || (SportFlow.OrdersService = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var ProductsForm = /** @class */ (function (_super) {
            __extends(ProductsForm, _super);
            function ProductsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductsForm.init) {
                    ProductsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.DateEditor;
                    Q.initFormType(ProductsForm, [
                        'ProductName', w0,
                        'ProductUnitPrice', w1,
                        'ProductCategoryId', w2,
                        'ProductDiscontinued', w3,
                        'ProductDateCreated', w4
                    ]);
                }
                return _this;
            }
            ProductsForm.formKey = 'SportFlow.Products';
            return ProductsForm;
        }(Serenity.PrefixedContext));
        SportFlow.ProductsForm = ProductsForm;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var ProductsRow;
        (function (ProductsRow) {
            ProductsRow.idProperty = 'ProductId';
            ProductsRow.nameProperty = 'ProductName';
            ProductsRow.localTextPrefix = 'SportFlow.Products';
            ProductsRow.lookupKey = 'SportFlow.Products';
            function getLookup() {
                return Q.getLookup('SportFlow.Products');
            }
            ProductsRow.getLookup = getLookup;
            ProductsRow.deletePermission = 'Administration:General';
            ProductsRow.insertPermission = 'Administration:General';
            ProductsRow.readPermission = 'Administration:General';
            ProductsRow.updatePermission = 'Administration:General';
        })(ProductsRow = SportFlow.ProductsRow || (SportFlow.ProductsRow = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var ProductsService;
        (function (ProductsService) {
            ProductsService.baseUrl = 'SportFlow/Products';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductsService = SportFlow.ProductsService || (SportFlow.ProductsService = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var ProvincesForm = /** @class */ (function (_super) {
            __extends(ProvincesForm, _super);
            function ProvincesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProvincesForm.init) {
                    ProvincesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ProvincesForm, [
                        'ProvinceName', w0
                    ]);
                }
                return _this;
            }
            ProvincesForm.formKey = 'SportFlow.Provinces';
            return ProvincesForm;
        }(Serenity.PrefixedContext));
        SportFlow.ProvincesForm = ProvincesForm;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var ProvincesRow;
        (function (ProvincesRow) {
            ProvincesRow.idProperty = 'ProvinceId';
            ProvincesRow.nameProperty = 'ProvinceName';
            ProvincesRow.localTextPrefix = 'SportFlow.Provinces';
            ProvincesRow.lookupKey = 'SportFlow.Provinces';
            function getLookup() {
                return Q.getLookup('SportFlow.Provinces');
            }
            ProvincesRow.getLookup = getLookup;
            ProvincesRow.deletePermission = 'Administration:General';
            ProvincesRow.insertPermission = 'Administration:General';
            ProvincesRow.readPermission = 'Administration:General';
            ProvincesRow.updatePermission = 'Administration:General';
        })(ProvincesRow = SportFlow.ProvincesRow || (SportFlow.ProvincesRow = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var ProvincesService;
        (function (ProvincesService) {
            ProvincesService.baseUrl = 'SportFlow/Provinces';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProvincesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProvincesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProvincesService = SportFlow.ProvincesService || (SportFlow.ProvincesService = {}));
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlowCustomer;
    (function (SportFlowCustomer) {
        var CustomerOrdersForm = /** @class */ (function (_super) {
            __extends(CustomerOrdersForm, _super);
            function CustomerOrdersForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomerOrdersForm.formKey = 'SportFlowCustomer.CustomerOrders';
            return CustomerOrdersForm;
        }(Serenity.PrefixedContext));
        SportFlowCustomer.CustomerOrdersForm = CustomerOrdersForm;
    })(SportFlowCustomer = SportFlowApp.SportFlowCustomer || (SportFlowApp.SportFlowCustomer = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlowCustomer;
    (function (SportFlowCustomer) {
        var CustomerOrdersRow;
        (function (CustomerOrdersRow) {
            CustomerOrdersRow.idProperty = 'OrderId';
            CustomerOrdersRow.localTextPrefix = 'SportFlowCustomer.CustomerOrders';
            CustomerOrdersRow.deletePermission = 'Customer:General';
            CustomerOrdersRow.insertPermission = 'Customer:General';
            CustomerOrdersRow.readPermission = 'Customer:General';
            CustomerOrdersRow.updatePermission = 'Customer:General';
        })(CustomerOrdersRow = SportFlowCustomer.CustomerOrdersRow || (SportFlowCustomer.CustomerOrdersRow = {}));
    })(SportFlowCustomer = SportFlowApp.SportFlowCustomer || (SportFlowApp.SportFlowCustomer = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlowCustomer;
    (function (SportFlowCustomer) {
        var CustomerOrdersService;
        (function (CustomerOrdersService) {
            CustomerOrdersService.baseUrl = 'SportFlowCustomer/CustomerOrders';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerOrdersService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerOrdersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerOrdersService = SportFlowCustomer.CustomerOrdersService || (SportFlowCustomer.CustomerOrdersService = {}));
    })(SportFlowCustomer = SportFlowApp.SportFlowCustomer || (SportFlowApp.SportFlowCustomer = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Texts;
    (function (Texts) {
        SportFlowApp['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, SportFlow: { Categories: { CategoryDateCreated: 1, CategoryDescription: 1, CategoryId: 1, CategoryName: 1 }, Cities: { CityId: 1, CityName: 1, CityProvinceId: 1, CityProvinceProvinceName: 1 }, Customers: { CustomerCreditCard: 1, CustomerDateCreated: 1, CustomerId: 1, CustomerName: 1, CustomerUserDisplayName: 1, CustomerUserEmail: 1, CustomerUserId: 1, CustomerUserInsertDate: 1, CustomerUserInsertUserId: 1, CustomerUserIsActive: 1, CustomerUserLastDirectoryUpdate: 1, CustomerUserPasswordHash: 1, CustomerUserPasswordSalt: 1, CustomerUserSource: 1, CustomerUserUpdateDate: 1, CustomerUserUpdateUserId: 1, CustomerUserUserImage: 1, CustomerUserUsername: 1, CustomerUsername: 1, UserEmail: 1 }, OrderDetails: { DetailDiscount: 1, DetailId: 1, DetailOrderId: 1, DetailOrderOrderCityId: 1, DetailOrderOrderCustomerId: 1, DetailOrderOrderDateCreated: 1, DetailOrderOrderProvinceId: 1, DetailOrderOrderStatus: 1, DetailProductId: 1, DetailProductProductCategoryId: 1, DetailProductProductDateCreated: 1, DetailProductProductDiscontinued: 1, DetailProductProductName: 1, DetailProductProductUnitPrice: 1, DetailQuantity: 1, DetailTotal: 1, DetailUnitPrice: 1 }, Orders: { DetailsList: 1, OrderAddress: 1, OrderCityCityName: 1, OrderCityCityProvinceId: 1, OrderCityId: 1, OrderCustomerCustomerCreditCard: 1, OrderCustomerCustomerDateCreated: 1, OrderCustomerCustomerName: 1, OrderCustomerCustomerUserId: 1, OrderCustomerId: 1, OrderDateCreated: 1, OrderId: 1, OrderProvinceId: 1, OrderProvinceProvinceName: 1, OrderStatus: 1 }, Products: { ProductCategoryCategoryDateCreated: 1, ProductCategoryCategoryDescription: 1, ProductCategoryCategoryName: 1, ProductCategoryId: 1, ProductDateCreated: 1, ProductDiscontinued: 1, ProductId: 1, ProductName: 1, ProductUnitPrice: 1 }, Provinces: { ProvinceId: 1, ProvinceName: 1 } }, SportFlowCustomer: { CustomerOrders: { OrderCityCityName: 1, OrderCityCityProvinceId: 1, OrderCityId: 1, OrderCustomerCustomerCreditCard: 1, OrderCustomerCustomerDateCreated: 1, OrderCustomerCustomerName: 1, OrderCustomerCustomerUserId: 1, OrderCustomerId: 1, OrderDateCreated: 1, OrderId: 1, OrderProvinceId: 1, OrderProvinceProvinceName: 1, OrderStatus: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = SportFlowApp.Texts || (SportFlowApp.Texts = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = SportFlowApp.Authorization || (SportFlowApp.Authorization = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = SportFlowApp.Administration || (SportFlowApp.Administration = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = SportFlowApp.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = SportFlowApp.LanguageList || (SportFlowApp.LanguageList = {}));
})(SportFlowApp || (SportFlowApp = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var SportFlowApp;
(function (SportFlowApp) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('SportFlowApp');
        Serenity.EntityDialog.defaultLanguageList = SportFlowApp.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = SportFlowApp.ScriptInitialization || (SportFlowApp.ScriptInitialization = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    SportFlowApp.BasicProgressDialog = BasicProgressDialog;
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new SportFlowApp.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = SportFlowApp.DialogUtils || (SportFlowApp.DialogUtils = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    SportFlowApp.StaticTextBlock = StaticTextBlock;
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = SportFlowApp.Common || (SportFlowApp.Common = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                /*$.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });*/
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = SportFlowApp.Membership || (SportFlowApp.Membership = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('NewPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = SportFlowApp.Membership || (SportFlowApp.Membership = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = SportFlowApp.Membership || (SportFlowApp.Membership = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = SportFlowApp.Membership || (SportFlowApp.Membership = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = SportFlowApp.Membership || (SportFlowApp.Membership = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CategoriesDialog = /** @class */ (function (_super) {
            __extends(CategoriesDialog, _super);
            function CategoriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SportFlow.CategoriesForm(_this.idPrefix);
                return _this;
            }
            CategoriesDialog.prototype.getFormKey = function () { return SportFlow.CategoriesForm.formKey; };
            CategoriesDialog.prototype.getIdProperty = function () { return SportFlow.CategoriesRow.idProperty; };
            CategoriesDialog.prototype.getLocalTextPrefix = function () { return SportFlow.CategoriesRow.localTextPrefix; };
            CategoriesDialog.prototype.getNameProperty = function () { return SportFlow.CategoriesRow.nameProperty; };
            CategoriesDialog.prototype.getService = function () { return SportFlow.CategoriesService.baseUrl; };
            CategoriesDialog.prototype.getDeletePermission = function () { return SportFlow.CategoriesRow.deletePermission; };
            CategoriesDialog.prototype.getInsertPermission = function () { return SportFlow.CategoriesRow.insertPermission; };
            CategoriesDialog.prototype.getUpdatePermission = function () { return SportFlow.CategoriesRow.updatePermission; };
            CategoriesDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    var today = Q.formatDate(new Date(), "yyyy/MM/dd");
                    this.form.CategoryDateCreated.value = today;
                }
            };
            CategoriesDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('delete-button').hide();
            };
            CategoriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesDialog);
            return CategoriesDialog;
        }(Serenity.EntityDialog));
        SportFlow.CategoriesDialog = CategoriesDialog;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CategoriesGrid = /** @class */ (function (_super) {
            __extends(CategoriesGrid, _super);
            function CategoriesGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoriesGrid.prototype.getColumnsKey = function () { return 'SportFlow.Categories'; };
            CategoriesGrid.prototype.getDialogType = function () { return SportFlow.CategoriesDialog; };
            CategoriesGrid.prototype.getIdProperty = function () { return SportFlow.CategoriesRow.idProperty; };
            CategoriesGrid.prototype.getInsertPermission = function () { return SportFlow.CategoriesRow.insertPermission; };
            CategoriesGrid.prototype.getLocalTextPrefix = function () { return SportFlow.CategoriesRow.localTextPrefix; };
            CategoriesGrid.prototype.getService = function () { return SportFlow.CategoriesService.baseUrl; };
            CategoriesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SportFlowApp.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CategoriesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesGrid);
            return CategoriesGrid;
        }(Serenity.EntityGrid));
        SportFlow.CategoriesGrid = CategoriesGrid;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CitiesDialog = /** @class */ (function (_super) {
            __extends(CitiesDialog, _super);
            function CitiesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SportFlow.CitiesForm(_this.idPrefix);
                return _this;
            }
            CitiesDialog.prototype.getFormKey = function () { return SportFlow.CitiesForm.formKey; };
            CitiesDialog.prototype.getIdProperty = function () { return SportFlow.CitiesRow.idProperty; };
            CitiesDialog.prototype.getLocalTextPrefix = function () { return SportFlow.CitiesRow.localTextPrefix; };
            CitiesDialog.prototype.getNameProperty = function () { return SportFlow.CitiesRow.nameProperty; };
            CitiesDialog.prototype.getService = function () { return SportFlow.CitiesService.baseUrl; };
            CitiesDialog.prototype.getDeletePermission = function () { return SportFlow.CitiesRow.deletePermission; };
            CitiesDialog.prototype.getInsertPermission = function () { return SportFlow.CitiesRow.insertPermission; };
            CitiesDialog.prototype.getUpdatePermission = function () { return SportFlow.CitiesRow.updatePermission; };
            CitiesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CitiesDialog);
            return CitiesDialog;
        }(Serenity.EntityDialog));
        SportFlow.CitiesDialog = CitiesDialog;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CitiesGrid = /** @class */ (function (_super) {
            __extends(CitiesGrid, _super);
            function CitiesGrid(container) {
                return _super.call(this, container) || this;
            }
            CitiesGrid.prototype.getColumnsKey = function () { return 'SportFlow.Cities'; };
            CitiesGrid.prototype.getDialogType = function () { return SportFlow.CitiesDialog; };
            CitiesGrid.prototype.getIdProperty = function () { return SportFlow.CitiesRow.idProperty; };
            CitiesGrid.prototype.getInsertPermission = function () { return SportFlow.CitiesRow.insertPermission; };
            CitiesGrid.prototype.getLocalTextPrefix = function () { return SportFlow.CitiesRow.localTextPrefix; };
            CitiesGrid.prototype.getService = function () { return SportFlow.CitiesService.baseUrl; };
            CitiesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SportFlowApp.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CitiesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CitiesGrid);
            return CitiesGrid;
        }(Serenity.EntityGrid));
        SportFlow.CitiesGrid = CitiesGrid;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CustomersDialog = /** @class */ (function (_super) {
            __extends(CustomersDialog, _super);
            function CustomersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SportFlow.CustomersForm(_this.idPrefix);
                return _this;
            }
            CustomersDialog.prototype.getFormKey = function () { return SportFlow.CustomersForm.formKey; };
            CustomersDialog.prototype.getIdProperty = function () { return SportFlow.CustomersRow.idProperty; };
            CustomersDialog.prototype.getLocalTextPrefix = function () { return SportFlow.CustomersRow.localTextPrefix; };
            CustomersDialog.prototype.getNameProperty = function () { return SportFlow.CustomersRow.nameProperty; };
            CustomersDialog.prototype.getService = function () { return SportFlow.CustomersService.baseUrl; };
            CustomersDialog.prototype.getDeletePermission = function () { return SportFlow.CustomersRow.deletePermission; };
            CustomersDialog.prototype.getInsertPermission = function () { return SportFlow.CustomersRow.insertPermission; };
            CustomersDialog.prototype.getUpdatePermission = function () { return SportFlow.CustomersRow.updatePermission; };
            CustomersDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    var today = Q.formatDate(new Date(), "yyyy/MM/dd");
                    this.form.CustomerDateCreated.value = today;
                }
            };
            CustomersDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //this.toolbar.findButton('delete-button').hide();
            };
            CustomersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomersDialog);
            return CustomersDialog;
        }(Serenity.EntityDialog));
        SportFlow.CustomersDialog = CustomersDialog;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var CustomersGrid = /** @class */ (function (_super) {
            __extends(CustomersGrid, _super);
            function CustomersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomersGrid.prototype.getColumnsKey = function () { return 'SportFlow.Customers'; };
            CustomersGrid.prototype.getDialogType = function () { return SportFlow.CustomersDialog; };
            CustomersGrid.prototype.getIdProperty = function () { return SportFlow.CustomersRow.idProperty; };
            CustomersGrid.prototype.getInsertPermission = function () { return SportFlow.CustomersRow.insertPermission; };
            CustomersGrid.prototype.getLocalTextPrefix = function () { return SportFlow.CustomersRow.localTextPrefix; };
            CustomersGrid.prototype.getService = function () { return SportFlow.CustomersService.baseUrl; };
            CustomersGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SportFlowApp.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomersGrid);
            return CustomersGrid;
        }(Serenity.EntityGrid));
        SportFlow.CustomersGrid = CustomersGrid;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var OrderDetailsDialog = /** @class */ (function (_super) {
            __extends(OrderDetailsDialog, _super);
            function OrderDetailsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new SportFlow.OrderDetailsForm(_this.idPrefix);
                // Cada vez que se actualice el ProductID, se actualiza el campo de precio unitario.
                _this.form.DetailProductId.changeSelect2(function () {
                    var productID = Q.toId(_this.form.DetailProductId.value);
                    if (productID != null) {
                        var product = SportFlow.ProductsRow.getLookup().itemById[productID];
                        if (product) {
                            console.log("Product:", product);
                            _this.form.DetailUnitPrice.set_value(product.ProductUnitPrice);
                        }
                    }
                });
                return _this;
            }
            OrderDetailsDialog.prototype.getFormKey = function () { return SportFlow.OrderDetailsForm.formKey; };
            OrderDetailsDialog.prototype.getIdProperty = function () { return SportFlow.OrderDetailsRow.idProperty; };
            OrderDetailsDialog.prototype.getLocalTextPrefix = function () { return SportFlow.OrderDetailsRow.localTextPrefix; };
            OrderDetailsDialog.prototype.getService = function () { return SportFlow.OrderDetailsService.baseUrl; };
            OrderDetailsDialog.prototype.getDeletePermission = function () { return SportFlow.OrderDetailsRow.deletePermission; };
            OrderDetailsDialog.prototype.getInsertPermission = function () { return SportFlow.OrderDetailsRow.insertPermission; };
            OrderDetailsDialog.prototype.getUpdatePermission = function () { return SportFlow.OrderDetailsRow.updatePermission; };
            OrderDetailsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('delete-button').hide();
            };
            OrderDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsDialog);
            return OrderDetailsDialog;
        }(SportFlowApp.Common.GridEditorDialog));
        SportFlow.OrderDetailsDialog = OrderDetailsDialog;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var OrderDetailsEditor = /** @class */ (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "SportFlow.OrderDetails"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return SportFlow.OrderDetailsDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return SportFlow.OrderDetailsRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                var productId = Q.toId(row.DetailProductId);
                if (productId == null) {
                    Q.alert("Por favor selecciona un producto.");
                    return false;
                }
                var product = SportFlow.ProductsRow.getLookup().itemById[productId];
                if (!product) {
                    Q.alert("El producto seleccionado no existe en el catálogo.");
                    return false;
                }
                row.DetailProductId = productId;
                row.DetailProductProductName = product.ProductName;
                row.DetailUnitPrice = product.ProductUnitPrice;
                row.DetailTotal = (row.DetailQuantity || 0) * (row.DetailUnitPrice || 0) - (row.DetailDiscount || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(SportFlowApp.Common.GridEditorBase));
        SportFlow.OrderDetailsEditor = OrderDetailsEditor;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var OrderDetailsGrid = /** @class */ (function (_super) {
            __extends(OrderDetailsGrid, _super);
            function OrderDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsGrid.prototype.getColumnsKey = function () { return 'SportFlow.OrderDetails'; };
            OrderDetailsGrid.prototype.getDialogType = function () { return SportFlow.OrderDetailsDialog; };
            OrderDetailsGrid.prototype.getIdProperty = function () { return SportFlow.OrderDetailsRow.idProperty; };
            OrderDetailsGrid.prototype.getInsertPermission = function () { return SportFlow.OrderDetailsRow.insertPermission; };
            OrderDetailsGrid.prototype.getLocalTextPrefix = function () { return SportFlow.OrderDetailsRow.localTextPrefix; };
            OrderDetailsGrid.prototype.getService = function () { return SportFlow.OrderDetailsService.baseUrl; };
            OrderDetailsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SportFlowApp.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsGrid);
            return OrderDetailsGrid;
        }(Serenity.EntityGrid));
        SportFlow.OrderDetailsGrid = OrderDetailsGrid;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var OrdersDialog = /** @class */ (function (_super) {
            __extends(OrdersDialog, _super);
            function OrdersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SportFlow.OrdersForm(_this.idPrefix);
                return _this;
            }
            OrdersDialog.prototype.getFormKey = function () { return SportFlow.OrdersForm.formKey; };
            OrdersDialog.prototype.getIdProperty = function () { return SportFlow.OrdersRow.idProperty; };
            OrdersDialog.prototype.getLocalTextPrefix = function () { return SportFlow.OrdersRow.localTextPrefix; };
            //protected getNameProperty() { return OrdersRow.nameProperty; }
            OrdersDialog.prototype.getService = function () { return SportFlow.OrdersService.baseUrl; };
            OrdersDialog.prototype.getDeletePermission = function () { return SportFlow.OrdersRow.deletePermission; };
            OrdersDialog.prototype.getInsertPermission = function () { return SportFlow.OrdersRow.insertPermission; };
            OrdersDialog.prototype.getUpdatePermission = function () { return SportFlow.OrdersRow.updatePermission; };
            OrdersDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    var today = Q.formatDate(new Date(), "yyyy/MM/dd");
                    this.form.OrderDateCreated.value = today;
                }
            };
            OrdersDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('delete-button').hide();
            };
            OrdersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrdersDialog);
            return OrdersDialog;
        }(Serenity.EntityDialog));
        SportFlow.OrdersDialog = OrdersDialog;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var OrdersGrid = /** @class */ (function (_super) {
            __extends(OrdersGrid, _super);
            function OrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            OrdersGrid.prototype.getColumnsKey = function () { return 'SportFlow.Orders'; };
            OrdersGrid.prototype.getDialogType = function () { return SportFlow.OrdersDialog; };
            OrdersGrid.prototype.getIdProperty = function () { return SportFlow.OrdersRow.idProperty; };
            OrdersGrid.prototype.getInsertPermission = function () { return SportFlow.OrdersRow.insertPermission; };
            OrdersGrid.prototype.getLocalTextPrefix = function () { return SportFlow.OrdersRow.localTextPrefix; };
            OrdersGrid.prototype.getService = function () { return SportFlow.OrdersService.baseUrl; };
            OrdersGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SportFlowApp.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrdersGrid);
            return OrdersGrid;
        }(Serenity.EntityGrid));
        SportFlow.OrdersGrid = OrdersGrid;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var ProductsDialog = /** @class */ (function (_super) {
            __extends(ProductsDialog, _super);
            function ProductsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SportFlow.ProductsForm(_this.idPrefix);
                return _this;
            }
            ProductsDialog.prototype.getFormKey = function () { return SportFlow.ProductsForm.formKey; };
            ProductsDialog.prototype.getIdProperty = function () { return SportFlow.ProductsRow.idProperty; };
            ProductsDialog.prototype.getLocalTextPrefix = function () { return SportFlow.ProductsRow.localTextPrefix; };
            ProductsDialog.prototype.getNameProperty = function () { return SportFlow.ProductsRow.nameProperty; };
            ProductsDialog.prototype.getService = function () { return SportFlow.ProductsService.baseUrl; };
            ProductsDialog.prototype.getDeletePermission = function () { return SportFlow.ProductsRow.deletePermission; };
            ProductsDialog.prototype.getInsertPermission = function () { return SportFlow.ProductsRow.insertPermission; };
            ProductsDialog.prototype.getUpdatePermission = function () { return SportFlow.ProductsRow.updatePermission; };
            ProductsDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    var today = Q.formatDate(new Date(), "yyyy/MM/dd");
                    this.form.ProductDateCreated.value = today;
                }
            };
            ProductsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('delete-button').hide();
            };
            ProductsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsDialog);
            return ProductsDialog;
        }(Serenity.EntityDialog));
        SportFlow.ProductsDialog = ProductsDialog;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var ProductsGrid = /** @class */ (function (_super) {
            __extends(ProductsGrid, _super);
            function ProductsGrid(container) {
                return _super.call(this, container) || this;
                //this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
            }
            ProductsGrid.prototype.getColumnsKey = function () { return 'SportFlow.Products'; };
            ProductsGrid.prototype.getDialogType = function () { return SportFlow.ProductsDialog; };
            ProductsGrid.prototype.getIdProperty = function () { return SportFlow.ProductsRow.idProperty; };
            ProductsGrid.prototype.getInsertPermission = function () { return SportFlow.ProductsRow.insertPermission; };
            ProductsGrid.prototype.getLocalTextPrefix = function () { return SportFlow.ProductsRow.localTextPrefix; };
            ProductsGrid.prototype.getService = function () { return SportFlow.ProductsService.baseUrl; };
            ProductsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SportFlowApp.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ProductsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsGrid);
            return ProductsGrid;
        }(Serenity.EntityGrid));
        SportFlow.ProductsGrid = ProductsGrid;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var ProvincesDialog = /** @class */ (function (_super) {
            __extends(ProvincesDialog, _super);
            function ProvincesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SportFlow.ProvincesForm(_this.idPrefix);
                return _this;
            }
            ProvincesDialog.prototype.getFormKey = function () { return SportFlow.ProvincesForm.formKey; };
            ProvincesDialog.prototype.getIdProperty = function () { return SportFlow.ProvincesRow.idProperty; };
            ProvincesDialog.prototype.getLocalTextPrefix = function () { return SportFlow.ProvincesRow.localTextPrefix; };
            ProvincesDialog.prototype.getNameProperty = function () { return SportFlow.ProvincesRow.nameProperty; };
            ProvincesDialog.prototype.getService = function () { return SportFlow.ProvincesService.baseUrl; };
            ProvincesDialog.prototype.getDeletePermission = function () { return SportFlow.ProvincesRow.deletePermission; };
            ProvincesDialog.prototype.getInsertPermission = function () { return SportFlow.ProvincesRow.insertPermission; };
            ProvincesDialog.prototype.getUpdatePermission = function () { return SportFlow.ProvincesRow.updatePermission; };
            ProvincesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProvincesDialog);
            return ProvincesDialog;
        }(Serenity.EntityDialog));
        SportFlow.ProvincesDialog = ProvincesDialog;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlow;
    (function (SportFlow) {
        var ProvincesGrid = /** @class */ (function (_super) {
            __extends(ProvincesGrid, _super);
            function ProvincesGrid(container) {
                return _super.call(this, container) || this;
            }
            ProvincesGrid.prototype.getColumnsKey = function () { return 'SportFlow.Provinces'; };
            ProvincesGrid.prototype.getDialogType = function () { return SportFlow.ProvincesDialog; };
            ProvincesGrid.prototype.getIdProperty = function () { return SportFlow.ProvincesRow.idProperty; };
            ProvincesGrid.prototype.getInsertPermission = function () { return SportFlow.ProvincesRow.insertPermission; };
            ProvincesGrid.prototype.getLocalTextPrefix = function () { return SportFlow.ProvincesRow.localTextPrefix; };
            ProvincesGrid.prototype.getService = function () { return SportFlow.ProvincesService.baseUrl; };
            ProvincesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SportFlowApp.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ProvincesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProvincesGrid);
            return ProvincesGrid;
        }(Serenity.EntityGrid));
        SportFlow.ProvincesGrid = ProvincesGrid;
    })(SportFlow = SportFlowApp.SportFlow || (SportFlowApp.SportFlow = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlowCustomer;
    (function (SportFlowCustomer) {
        var CustomerOrdersDialog = /** @class */ (function (_super) {
            __extends(CustomerOrdersDialog, _super);
            function CustomerOrdersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SportFlowCustomer.CustomerOrdersForm(_this.idPrefix);
                return _this;
            }
            CustomerOrdersDialog.prototype.getFormKey = function () { return SportFlowCustomer.CustomerOrdersForm.formKey; };
            CustomerOrdersDialog.prototype.getIdProperty = function () { return SportFlowCustomer.CustomerOrdersRow.idProperty; };
            CustomerOrdersDialog.prototype.getLocalTextPrefix = function () { return SportFlowCustomer.CustomerOrdersRow.localTextPrefix; };
            CustomerOrdersDialog.prototype.getNameProperty = function () { return SportFlowCustomer.CustomerOrdersRow.nameProperty; };
            CustomerOrdersDialog.prototype.getService = function () { return SportFlowCustomer.CustomerOrdersService.baseUrl; };
            CustomerOrdersDialog.prototype.getDeletePermission = function () { return SportFlowCustomer.CustomerOrdersRow.deletePermission; };
            CustomerOrdersDialog.prototype.getInsertPermission = function () { return SportFlowCustomer.CustomerOrdersRow.insertPermission; };
            CustomerOrdersDialog.prototype.getUpdatePermission = function () { return SportFlowCustomer.CustomerOrdersRow.updatePermission; };
            CustomerOrdersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrdersDialog);
            return CustomerOrdersDialog;
        }(Serenity.EntityDialog));
        SportFlowCustomer.CustomerOrdersDialog = CustomerOrdersDialog;
    })(SportFlowCustomer = SportFlowApp.SportFlowCustomer || (SportFlowApp.SportFlowCustomer = {}));
})(SportFlowApp || (SportFlowApp = {}));
var SportFlowApp;
(function (SportFlowApp) {
    var SportFlowCustomer;
    (function (SportFlowCustomer) {
        var CustomerOrdersGrid = /** @class */ (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerOrdersGrid.prototype.getColumnsKey = function () { return 'SportFlowCustomer.CustomerOrders'; };
            CustomerOrdersGrid.prototype.getDialogType = function () { return SportFlowCustomer.CustomerOrdersDialog; };
            CustomerOrdersGrid.prototype.getIdProperty = function () { return SportFlowCustomer.CustomerOrdersRow.idProperty; };
            CustomerOrdersGrid.prototype.getInsertPermission = function () { return SportFlowCustomer.CustomerOrdersRow.insertPermission; };
            CustomerOrdersGrid.prototype.getLocalTextPrefix = function () { return SportFlowCustomer.CustomerOrdersRow.localTextPrefix; };
            CustomerOrdersGrid.prototype.getService = function () { return SportFlowCustomer.CustomerOrdersService.baseUrl; };
            CustomerOrdersGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons = buttons.filter(function (x) { return x.cssClass !== "add-button"; });
                buttons = buttons.filter(function (x) { return x.cssClass !== "column-picker-button"; });
                buttons.push(SportFlowApp.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrdersGrid);
            return CustomerOrdersGrid;
        }(Serenity.EntityGrid));
        SportFlowCustomer.CustomerOrdersGrid = CustomerOrdersGrid;
    })(SportFlowCustomer = SportFlowApp.SportFlowCustomer || (SportFlowApp.SportFlowCustomer = {}));
})(SportFlowApp || (SportFlowApp = {}));
//# sourceMappingURL=SportFlowApp.Web.js.map