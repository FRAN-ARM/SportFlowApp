
namespace SportFlowApp.SportFlowCustomer.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SportFlowCustomer.CustomerOrders")]
    [BasedOnRow(typeof(Entities.CustomerOrdersRow), CheckNames = true)]
    public class CustomerOrdersForm
    {
    }
}