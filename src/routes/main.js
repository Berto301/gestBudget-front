import DashboardGroup from "views/pages/dashboard/group";
import DashboardSociety from "views/pages/dashboard/society";
import Groups from "views/pages/society/container";
import SalesGroup from "views/pages/sales/group/container";
import SalesSociety from "views/pages/sales/society";
import RecipeGroup from "views/pages/recipe/group/container";
import RecipeSociety from "views/pages/recipe/society";
import Profile from "views/pages/profile"
import Login from "views/connexion/login"
import Register from "views/connexion/register"
var routes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: DashboardGroup,
    layout: "/admin",
  },

  {
    path: "/society",
    name: "Society",
    icon: "fas fas fa-university text-muted",
    component: Groups,
    layout: "/admin",
  },

  {
    path: "/recipe-group",
    name: "Recipe",
    icon: "fas fa-business-time text-info",
    component: RecipeGroup,
    layout: "/admin",
  },

  

 

  {
    path: "/sales-group",
    name: "Sales",
    icon: "fas fa-business-time text-info",
    component: SalesGroup,
    layout: "/admin",
  },

  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-black",
    component: Profile,
    layout: "/admin",
  },
 
];

const societyRoutes = [
{
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: DashboardSociety,
    layout: "/admin",
  },
  {
    path: "/recipe-society",
    name: "Recipe",
    icon: "fas fa-business-time text-blue",
    component: RecipeSociety,
    layout: "/admin",
  },
   {
    path: "/sales-society",
    name: "Sales",
    icon: "fas fa-business-time text-blue",
    component: SalesSociety,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
]

const authRoutes=[
{
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
]
export {societyRoutes,routes,authRoutes}
export default routes;
