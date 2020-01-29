import React, { Component } from 'react'
import LoaderContext from 'utility/LoaderContext';
import HttpCall from 'utility/HttpCall';
import BackendUrls from 'utility/BackendUrls';
import Utility from 'utility/Utility';
import mHistory from 'mHistory';
import MessageUtility from 'utility/MessageUtility';
import LoginComponentInterface, { LoginStateInterface } from './login-interface';

export default abstract class LoginComponent extends Component<any, LoginStateInterface> implements LoginComponentInterface {

    abstract loginPingLink:string;
    abstract forgotPasswordLink:string;

    abstract afterSuccessLogin:(data:any)=>any
    abstract changeToRegister:(data:any)=>any
    
    
    protected afterErrorLogin(error:any){
        Utility.showNotification("danger", MessageUtility.messages.ERROR_GENERAL);
    }

    protected successPasswordSent(data:any){
        
    }
    protected errorSendingPassword(error:any){
        
    }

    state = {
        loginForm: {
            email: "",
            password: ""
        }
    }
    
    constructor(props) {
        super(props)
    
        this.afterErrorLogin.bind(this);
    }
    
    
    setLoaderState: any
    changeLoginFormData = (event) => {
        this.setState({
            loginForm: { ...this.state.loginForm, [event.target.name]: event.target.value }
        })
    }


    submitLogin = (event) => {
        this.setLoaderState(true);

        HttpCall.callUrl(BackendUrls.formUrl(this.loginPingLink), "POST", this.state.loginForm, data => {
            this.setLoaderState(false);
            console.log(data.data);
            this.afterSuccessLogin(data);
            // Utility.signIn(data.data.sessionToken, data.data.userType, data.data.userName);
            // mHistory.push("/user")
        }, error => {
            this.setLoaderState(false);
            this.afterErrorLogin(error);
        })
        event.preventDefault();
    }

    render() {
        return (
            <>

                <LoaderContext.Consumer>
                    {
                        value => {
                            this.setLoaderState = value;
                            return <></>
                        }
                    }
                </LoaderContext.Consumer>
                <form className="form-signin" onSubmit={(event) => { this.submitLogin(event) }}>
                    <div className="form-group label-floating">
                        <label className="control-label bmd-label-floating">Email Address</label>
                        <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" value={this.state.loginForm.email} onChange={(event) => { this.changeLoginFormData(event) }} required />
                    </div>
                    <div className="form-group label-floating">
                        <label className="control-label bmd-label-floating">Password</label>
                        <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.loginForm.password} onChange={(event) => { this.changeLoginFormData(event) }} required />
                    </div>

                    <br />

                    <button className="btn btn-sm btn-secondary text-uppercase">Forgot password?</button>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    <hr className="my-4" />
                    <div className="text-center">
                    Not Signed in?
                    </div>
                    <button className="btn btn-lg btn-seconday btn-block text-uppercase" type="submit">Sign up Now</button>
                    {/* <hr className="my-4" />
                    <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                    <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> */}
                </form>
            </>
        )
    }
}
