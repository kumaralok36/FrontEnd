import ProviderDashboard from "./body/ProviderDashboard";
import ProviderProfile from "./body/ProviderProfile";
import ProviderPastSessions from "./body/ProviderPastSessions";

let routes=[
    {
        name:"Dashboard",
        icon:"dashboard",
        component:ProviderDashboard
    },
    {
        name:"Profile",
        icon:"dashboard",
        component:ProviderProfile
    },
    {
        name:"Past Sessions",
        icon:"dashboard",
        component:ProviderPastSessions
    },
    {
        name:"Logout",
        icon:"dashboard",
        component:""
    }
]
export default routes