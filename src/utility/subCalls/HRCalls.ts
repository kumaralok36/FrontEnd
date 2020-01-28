let HRCalls={
    Register:{
        url:"/hr/register",
        type:"POST"
    },
    Login:{
        url:"/hr/login",
        type:"POST"
    },
    Providers:{
        List:{
            Assigned:{
                url:"/hr/get/assigned",
                type:"POST"
            },
            Requested:{
                url:"/hr/get/requested",
                type:"POST"
            },
            Pending:{
                url:"/hr/get/pending",
                type:"POST"
            },
            Active:{
                url:"/hr/get/active",
                type:"POST"
            },
            Reected:{
                url:"/hr/get/rejected",
                type:"POST"
            }
        },
        Action:{
            Assign:{
                url:"/hr/action/assign",
                type:"POST"
            },
            Accept:{
                url:"/hr/action/accept",
                type:"POST"
            },
            Reject:{
                url:"/hr/action/reject",
                type:"POST"
            },
            Request:{
                url:"/hr/action/request",
                type:"POST"
            }
        }

    }
}

export default HRCalls