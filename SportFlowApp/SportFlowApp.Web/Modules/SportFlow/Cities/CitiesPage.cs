
namespace SportFlowApp.SportFlow.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SportFlow/Cities"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CitiesRow))]
    public class CitiesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SportFlow/Cities/CitiesIndex.cshtml");
        }
    }
}