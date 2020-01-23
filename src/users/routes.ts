import UserDashboard from "./body/UserDashboard";
import UserProfile from "./body/UserProfile";
import UserPastSessions from "./body/UserPastSessions";

let routes=[
    {
        name:"Book New Session",
        icon:"dashboard",
        component:""
    },
    {
        name:"Dashboard",
        icon:"dashboard",
        component:UserDashboard
    },
    {
        name:"Profile",
        icon:"dashboard",
        component:UserProfile
    },
    {
        name:"Past Sessions",
        icon:"dashboard",
        component:UserPastSessions
    },
    {
        name:"Logout",
        icon:"dashboard",
        component:""
    }
]
export default routes