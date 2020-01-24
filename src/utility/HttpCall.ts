import Utility from "./Utility";
import BackendUrls from "./BackendUrls";

export default class HttpCall {
    static errorCodes = {
        accountToken: 513,
        sessionToken: 552,
    }
    static callUrl(path: string, method: string, body: any, successCallback: (data: any) => any, errorCallback: (data: any) => any, formData: FormData = undefined) {
        path = BackendUrls.formUrl(path);
        if (formData) {
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
            let headers = Utility.getHeader();
            for (var i in headers) {
                oReq.setRequestHeader(i, headers[i]);
            }

            // Define what happens on successful data submission
            oReq.addEventListener('load', function (event) {
                
            });

            // Define what happens in case of error
            oReq.addEventListener(' error', function (event) {
                
            });

            console.log(formData);
            oReq.send(formData);
            return;
        } else {
            var headers = {
                ...Utility.getHeader(),
                "Content-Type": "application/json; charset=UTF-8",
            };
        }

        fetch(path, {
            method: method,
            headers: headers,
            body: body == undefined ? undefined : JSON.stringify(body)
        }).then(
            response => response.json()
        ).then(data => {
            if (data.error)
                throw (data)
            successCallback(data);
        }).catch(error => {
            console.error(error)
            if (error.errorCode == HttpCall.errorCodes.accountToken) {
                HttpCall.fetchAccountToken(path, method, body, successCallback, errorCallback, formData);
            } else if (error.errorCode == HttpCall.errorCodes.sessionToken) {
                Utility.signOut();
            } else {
                errorCallback(error);
            }
        })
    }
    private static fetchAccountToken(path: string, method: string, body: any, successCallback: (data: any) => any, errorCallback: (data: any) => any, formData: FormData = undefined) {
        console.log("Fetching Account Token : ", BackendUrls.formUrl(BackendUrls.TokenUrl));
        HttpCall.callUrl(BackendUrls.formUrl(BackendUrls.TokenUrl), "GET", undefined, (data) => {
            console.log(data.data.accountToken)
            Utility.setAccountToken(data.data.accountToken)
            HttpCall.callUrl(path, method, body, successCallback, errorCallback, formData);
        }, (error) => {
            errorCallback({
                error: error,
                message: "Error Fetching the Session Token"
            });
        })
    }
}
