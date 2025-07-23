using Serenity.Navigation;
using SportFlowApp.SportFlow.Pages;
using SportFlowApp.SportFlowCustomer.Pages;
using Administration = SportFlowApp.Administration.Pages;

// For Admins
[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationLink(2000, "Customers", typeof(CustomersController), icon: "fa-users")]
[assembly: NavigationLink(2001, "Orders", typeof(OrdersController), icon: "fa-shopping-cart")]
[assembly: NavigationLink(2002, "Products", typeof(ProductsController), icon: "fa-cube")]
[assembly: NavigationLink(2003, "Categories", typeof(CategoriesController), icon: "fa-folder-o")]
[assembly: NavigationLink(2004, "Provinces", typeof(ProvincesController), icon: "fa-flag")]
[assembly: NavigationLink(2005, "Cities", typeof(CitiesController), icon: "fa-map-marker")]

// For the Customer
[assembly: NavigationLink(3000, "My Orders", typeof(CustomerOrdersController), icon: "fa-shopping-cart")]
