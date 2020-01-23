import HttpCall from "./HttpCall";
import userCalls from "./subCalls/UserCalls";


export class BackendUrls {
    //private static BackendUrl=HttpCall.backEndUrl;
    // private static backEndUrl = "https://api.therapyondemand.io"
    private static backEndUrl = "http://localhost:3001"

    static TokenUrl = "/token/web";

    static URLS = {
        Login: "/web/login",
        Register: "/web/register",
        User:userCalls
    }

    public static formUrl(path: string): string {
        if (path.startsWith("https://") || path.startsWith("http://")) {
            return path
        }
        if (path.startsWith("/")) {
            return BackendUrls.backEndUrl + path
        }
        return BackendUrls.backEndUrl + "/" + path;
    }

    public static getBaseURL(): string {
        return this.backEndUrl;
    }
}
export default BackendUrls;