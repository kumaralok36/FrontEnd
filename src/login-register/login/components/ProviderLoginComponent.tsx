import React, { Component } from 'react'
import LoginComponentInterface, { LoginStateInterface } from './interface/login-interface';
import LoaderContext from 'utility/LoaderContext';
import LoginComponent from './interface/login-component';
import BackendUrls from 'utility/BackendUrls';
import Utility from 'utility/Utility';
import mHistory from 'mHistory';

export default class ProviderLoginComponent extends LoginComponent {
    loginPingLink: string;    forgotPasswordLink: string;
    
    afterSuccessLogin = (data: any) => {
        Utility.signIn(data.data.sessionToken, Utility.userTypes.provider, data.data.userName);
        mHistory.push("/provider")
    }
    changeToRegister: (data: any) => any;

    constructor(props) {
        super(props)
    
        this.loginPingLink=BackendUrls.URLS.Provider.Login.url;
        // this.forgotPasswordLink=BackendUrls.URLS.Provider

    }
    
}
