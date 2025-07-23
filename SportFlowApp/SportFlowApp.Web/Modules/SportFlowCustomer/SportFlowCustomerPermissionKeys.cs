using Serenity.Extensibility;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace SportFlowApp.Modules.SportFlowCustomer
{
    [NestedPermissionKeys]
    [DisplayName("Customer")]
    public class PermissionKeys
    {
        [Description("Customer can track online the order status")]
        public const string General = "Customer:General";
    }
}
