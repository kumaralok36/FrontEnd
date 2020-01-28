let ProviderCalls={
    Register:{
        url:"/provider/signup",
        type:"POST"
    },
    Login:{
        url:"/provider/login",
        type:"POST"
    },
    Notification:{
        Get:{
            url:"/provider/get/notification",
            type:"POST"
        },
        SetRead:{
            url:"/provider/set/notification",
            type:"POST"
        }
    },
    Documents:{
        Upload:{
            url:"/provider/upload/docs",
            type:"POST"
        }
    },
    Client:{
        List:{
            url:"/provider/get/clients",
            type:"POST"
        }
    },
    Profile:{
        Get:{
            url:"/provider/get/profile",
            type:"POST"
        },
        Set:{
            url:"/provider/edit/profile",
            type:"POST"
        }
    },
    Bookings:{
        List:{
            Present:{
                url:"/provider/get/bookings/present",
                type:"POST"
            },
            Past:{
                url:"/provider/get/bookings/past",
                type:"POST"
            }
        }
    },
    Payments:{
        Get:{
            url:"/provider/get/payments",
            type:"POST"
        }
    },
    Session:{
        Action:{
            FromEmail:{
                Accept:{
                    url:"/provider/session/accept",
                    type:"GET"
                },
                Reject:{
                    url:"/provider/session/reject",
                    type:"GET"
                }
            },
            FromDashboard:{
                Accept:{
                    url:"/provider/session/accept",
                    type:"POST"
                },
                Reject:{
                    url:"/provider/session/reject",
                    type:"POST"
                }
            },
            CheckIn:{
                url:"/provider/session/checkin",
                type:"POST"
            },
            CheckOut:{
                url:"/provider/session/checkout",
                type:"POST"
            }
        }
    }
}
export default ProviderCalls