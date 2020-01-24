import React, { Component } from 'react'
import HttpCall from 'utility/HttpCall';
import BackendUrls from 'utility/BackendUrls';
import LoaderContext from 'utility/LoaderContext';
import Utility from 'utility/Utility';
import MessageUtility from 'utility/MessageUtility';

export default class ProviderPastSessions extends Component {
    setLoaderState:any;
    componentDidMount(){
        this.setLoaderState(true);
        HttpCall.callUrl(BackendUrls.URLS.User.Sessions.Get.url, "POST", {
            x:""
        }, (data)=>{
            this.setLoaderState(false);
            console.log(data);
        }, (err)=>{
            this.setLoaderState(false);
            Utility.showNotification("danger", MessageUtility.messages.ERROR_GENERAL)
        })
    }
    render() {
        return (
            <>
                <LoaderContext.Consumer>
                    {
                        value=>{
                            this.setLoaderState=value;
                            return (<></>)
                        }
                    }
                </LoaderContext.Consumer>
                User Past Sessions
            </>
        )
    }
}
