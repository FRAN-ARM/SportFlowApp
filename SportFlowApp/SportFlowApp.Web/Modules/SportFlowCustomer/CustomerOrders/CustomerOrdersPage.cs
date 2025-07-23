
namespace SportFlowApp.SportFlowCustomer.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SportFlowCustomer/CustomerOrders"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomerOrdersRow))]
    public class CustomerOrdersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SportFlowCustomer/CustomerOrders/CustomerOrdersIndex.cshtml");
        }
    }
}