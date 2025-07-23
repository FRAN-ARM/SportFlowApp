
namespace SportFlowApp.SportFlow.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SportFlow/Provinces"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProvincesRow))]
    public class ProvincesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SportFlow/Provinces/ProvincesIndex.cshtml");
        }
    }
}