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
    static signOut() {
        Utility.setCookie("sessiontoken", "", 0);
        Utility.setCookie("userType", "", 0)
        Utility.setCookie("userName", "", 0)
        // location.href = "/";
    }
    
    static signIn(sessionToken:string, userType:number, userName:string) {
        Utility.setCookie("sessiontoken", sessionToken);
        Utility.setCookie("userType", ""+userType)
        Utility.setCookie("userName", userName)
    
        if(userType===1){
            // location.href = "/admins";
        }else if(userType){
            // location.href = "/clients";
        }
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
}