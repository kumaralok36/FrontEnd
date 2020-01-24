import ProviderDashboard from "./body/ProviderDashboard";
import ProfileProfile from "./body/ProviderProfile";
import ProviderPastSessions from "./body/ProviderPastSessions";

let routes=[
    {
        name:"Book New Session",
        icon:"dashboard",
        component:""
    },
    {
        name:"Dashboard",
        icon:"dashboard",
        component:ProviderDashboard
    },
    {
        name:"Profile",
        icon:"dashboard",
        component:ProfileProfile
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