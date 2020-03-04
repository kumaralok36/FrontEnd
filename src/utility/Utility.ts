import mHistory from "mHistory";

export default class Utility{
    static setCookie(cname:string, cvalue:string, exdays = 30) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    static getCookie(cname:string):string {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return undefined;
    }
    public static redirectToCorrectUrl(){
		switch(Utility.getUserType()){
			case Utility.userTypes.user:
                mHistory.push("/user");
                break;
		}
	}
    public static getHeader(){
        let json={
            mac: "REACT_WEB",
            sessiontoken: Utility.getCookie("sessiontoken"),
            accounttoken: Utility.getCookie("accounttoken")?Utility.getCookie("accounttoken"):undefined
        }
        return json
    }

    public static userTypes={
        hr:"hr",
        sales:"sales",
        admin:"admin",
        provider:"provider",
        user:"user"
    }

    public static getUserType():string{
        return Utility.getCookie("userType");
    }
    public static getUserName():string{
        return Utility.getCookie("userName");
    }
    public static isLoggedIn():boolean{
        return !(!Utility.getUserType())
    }

    public static setAccountToken(token:string){
        Utility.setCookie("accounttoken", token);
    }
    public static setSessionToken(token:string){
        Utility.setCookie("sessiontoken", token);
    }

    static signOut() {
        Utility.setCookie("sessiontoken", "", 0);
        Utility.setCookie("userType", "", 0)
        Utility.setCookie("userName", "", 0)
        // location.href = "/";
    }
    
    static signIn(sessionToken:string, userType:string, userName:string) {
        Utility.setCookie("sessiontoken", sessionToken);
        Utility.setCookie("userType", ""+userType)
        Utility.setCookie("userName", userName)
    }
    
    
    static getUrlParam() {
        // var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        // return (results && results[1]) || undefined;
    }
    static showNotification(type:string, text:string, lastTime=false) {
        //'success', 'Data has been Reset!'
        let win:any=window;
        if(win.md)
            win.md.showMyNotification('bottom', 'right', type, text);
        else{
            if(!lastTime){
                setTimeout(()=>{
                    Utility.showNotification(type, text, true);
                }, 1000)
            }
        }
    }

    public static getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
}