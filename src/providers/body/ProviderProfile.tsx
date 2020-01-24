import React, { Component } from 'react'
import LoaderContext from 'utility/LoaderContext';
import HttpCall from 'utility/HttpCall';
import BackendUrls from 'utility/BackendUrls';

export default class ProfileProfile extends Component {
    setLoaderState:any;

    componentDidMount(){
        this.setLoaderState(true);
        
        HttpCall.callUrl(BackendUrls.formUrl(BackendUrls.URLS.User.Profile.Get.url), "GET", undefined, data=>{
            this.setLoaderState(false);
        }, err=>{
            this.setLoaderState(false);
        })
    }

    render() {
        return (
            <>
                <LoaderContext.Consumer>
                    {
                        (value) => {
                            this.setLoaderState = value;
                            return (<></>);
                        }
                    }
                </LoaderContext.Consumer>
                User Profile
            </>
        )
    }
}
