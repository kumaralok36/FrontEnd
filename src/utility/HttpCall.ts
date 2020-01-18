import Utility from "./Utility";

export default class HttpCall{
    static callUrl(path:string, method:string, body:any, successCallback:(data:any)=>any, errorCallback:(data:any)=>any, hasFiles:boolean = false) {
        if (hasFiles) {
            //"Content-Type": 'multipart/form-data',
            var oReq = new XMLHttpRequest();
            oReq.open(method, path, true);
            oReq.onload = function (oEvent) {
                if (oReq.status == 200) {
                    successCallback(JSON.parse(oReq.response));
                    // oOutput.innerHTML = "Uploaded!";
                } else {
                    errorCallback(JSON.parse(oReq.response));
                    // oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
                }
            };
            oReq.setRequestHeader("mac", "RNE_WEB");
            oReq.setRequestHeader("sessiontoken", Utility.getCookie("sessiontoken"));
            let uploadableDocForm=undefined
            oReq.send(uploadableDocForm);
            return;
        } else {
            var headers = {
                "Content-Type": "application/json; charset=UTF-8",
                mac: "RNE_WEB",
                "sessiontoken": Utility.getCookie("sessiontoken")
            };
        }
    
        fetch(path, {
            method: method,
            headers: headers,
            body: body == undefined ? undefined : JSON.stringify(body)
        }).then(
            response => response.json()
        ).then(data => {
            if (!data.data)
                throw (data)
            successCallback(data);
        }).catch(error => {
            console.error(error)
            if (error.errorCode == 552) {
                Utility.signOut();
            } else {
                errorCallback(error);
            }
        })
    }
}
