import React, { Component } from 'react'
import LoginComponentInterface, { LoginStateInterface } from './interface/login-interface';
import LoaderContext from 'utility/LoaderContext';
import LoginComponent from './interface/login-component';

export default class ProviderLoginComponent extends LoginComponent {
    loginPingLink: string;    forgotPasswordLink: string;
    afterSuccessLogin: (data: any) => any;
    changeToRegister: (data: any) => any;


}
