let AdminCalls={
    Login: {
        url: "/admin/login",
        type: "POST"
    },
    Profile:{
        Get:{
            url:"/get/profile",
            type:"POST"
        },
        Set:{
            url:"/edit/profile",
            type:"POST"
        }
    },
    Registration:{
        DecodeEmail:{
            url:"/admin/decode/email",
            type:"POST"
        },
        AddUser:{
            url:"/admin/add_user",
            type:"POST"
        }
    },
    Password:{
        Reset:{
            url:"/reset/password",
            type:"POST"
        },
        Set:{
            url:"/set/password",
            type:"POST"
        }
    },
    Admins:{
        Get:{
            url:"/admin/get_user",
            type:"POST"
        },
        List:{
            url:"/admin/list_users",
            type:"POST"
        },
        Block:{
            url:"/admin/account_action",
            type:"POST"
        }
    }
}
export default AdminCalls