import HttpCall from "./HttpCall";

export class BackendUrls{
    //private static BackendUrl=HttpCall.backEndUrl;
    private static backEndUrl="https://api.therapyondemand.io"

    static TokenUrl="/token";

    static URLS={
        Login:"/web/login",
        Register:"/web/register",
        User:{
            Sessions:"",
            Clients:"",
            Profile:"",
            Booking:""
        }
        
    }

    public static formUrl(path:string):string{
        if(path.startsWith("/")){
            return BackendUrls.backEndUrl+path
        }
        return BackendUrls.backEndUrl+"/"+path;
    }

    public static getBaseURL():string{
        return this.backEndUrl;
    }
}
export default BackendUrls;