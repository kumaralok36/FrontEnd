import React, { Component } from 'react'
import LoaderContext from 'utility/LoaderContext';
import HttpCall from 'utility/HttpCall';
import BackendUrls from 'utility/BackendUrls';
import Utility from 'utility/Utility';
import mHistory from 'mHistory';
import MessageUtility from 'utility/MessageUtility';
import LoginComponentInterface, { LoginStateInterface } from './interface/login-interface';
import LoginComponent from './interface/login-component';

export default class UserLoginComponent extends LoginComponent {
    changeToRegister: (data: any) => any;
    forgotPasswordLink: string;

    afterSuccessLogin = (data: any) => {
        Utility.signIn(data.data.sessionToken, data.data.userType, data.data.userName);
        mHistory.push("/user")
    }

    protected afterErrorLogin(error) {
        super.afterErrorLogin(error);
    }
    

    loginPingLink: string;

    constructor(props) {
        super(props)

        this.loginPingLink = BackendUrls.URLS.User.Login.url;
        this.forgotPasswordLink = BackendUrls.URLS.User.Password.Reset.url;
    }

}
