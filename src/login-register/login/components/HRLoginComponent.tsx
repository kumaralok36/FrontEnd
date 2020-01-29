import React, { Component } from 'react'
import LoginComponentInterface, { LoginStateInterface } from './interface/login-interface';

export default class HRLoginComponent extends Component<any, LoginStateInterface> implements LoginComponentInterface {
    setLoaderState: any;
    changeLoginFormData = (event: any) => {

    };
    submitLogin = (event: any) => {

    };

    render() {
        return (
            <div>

            </div>
        )
    }
}
