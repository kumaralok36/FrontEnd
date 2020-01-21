let userCalls={
    Login: {
        url: "/user/login",
        request: {
            email: String,
            password: String
        },
        response: {
            data: {
                id: String,
                fName: String,
                lName: String,
                image: String,
                email: String,
                phone: String,
                gender: Number,
                role: "User"
            },
            message: "Successfully logged in"
        }
    },
    Register: {
        url: "/user/register",
        request: {
            firstName: String,
            lastName: String,
            email: String,
            password: String,
            gender: Number, //Keep in care that you dont send exact thing(case sensitive)
            phone: String,
            debug: Boolean
        }
    },
    Profile:{
        Get:{
            url:"/user/profile/get"
        },
        Update:{
            url:"/user/profile/update",
        }
    },
    Password:{
        Reset:{
            url:"/user/reset/password"
        },
        Set:{
            url:"/user/set/password"
        }
    },
    
    Address:{
        Add:{
            url:"/user/address/add"
        },
        Get:{
            url:"/user/address/get"
        },
        Delete:{
            url:"/user/address/delete"
        }
    },
    Payments:{
        Add:{
            url:"/user/payments/add"
        },
        Complete:{
            url:"/user/payments/complete"
        },
        Get:{
            url:"/user/payments/get"
        },
        Stripe:{
            Confirm:{
                url:"/payment/confirm"
            },
            Charge:{
                url:"/payment/charge"
            },
            ChargeApi:{
                url:"/payment/chargeapi"
            }
        }
    },
    Sessions:{
        Add:{
            url:"/user/session/add"
        },
        Get:{
            url:"/user/session/get"
        },
        Otp:{
            url:"user/session/otp"
        },
        Checkout:{
            url:"user/session/checkout"
        }
    }
}
export default userCalls