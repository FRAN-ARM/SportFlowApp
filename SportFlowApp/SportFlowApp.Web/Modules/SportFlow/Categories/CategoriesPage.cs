
namespace SportFlowApp.SportFlow.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SportFlow/Categories"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CategoriesRow))]
    public class CategoriesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SportFlow/Categories/CategoriesIndex.cshtml");
        }
    }
}