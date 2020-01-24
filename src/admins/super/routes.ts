import AdminDashboard from "./body/AdminDashboard";
import AdminProfile from "./body/AdminProfile";

let routes=[
    {
        name:"Dashboard",
        icon:"dashboard",
        component:AdminDashboard
    },
    {
        name:"Active Clients",
        icon:"dashboard",
        component:AdminDashboard
    },
    {
        name:"Profile",
        icon:"dashboard",
        component:AdminProfile
    },
    {
        name:"Logout",
        icon:"dashboard",
        component:""
    }
]
export default routes