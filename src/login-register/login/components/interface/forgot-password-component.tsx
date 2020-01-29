import React, { Component } from 'react'
import HttpCall from 'utility/HttpCall';
import BackendUrls from 'utility/BackendUrls';

interface Props{
    setLoaderState:(b:boolean)=>any
    callback:(b:boolean)=>any
    forgotPassLink:string
}
interface State{
    email:string
}

export default abstract class ForgotPasswordComponent extends Component<Props, State> {
    
    constructor(props) {
        super(props)
    
        this.state = {
             email:""
        }
    }
    
    onChangeForm=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    onClickForgotPassword = (event)=>{
        event.preventDefault();
        this.props.setLoaderState(true);
        HttpCall.callUrl(BackendUrls.formUrl(this.props.forgotPassLink), "post", {
            email:this.state.email
        }, (data)=>{
            this.props.setLoaderState(false);
        }, (error)=>{
            this.props.setLoaderState(false);
        })
    }
    render() {
        return (
            <>
                <form className="form-signin" onSubmit={(event) => { this.onClickForgotPassword(event) }}>
                    <div className="text-center">
                    Forgot Password
                    </div>
                    <div className="form-group label-floating">
                        <label className="control-label bmd-label-floating">Email Address</label>
                        <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" 
                            value={this.state.email} onChange={(event) => { this.onChangeForm(event) }} required />
                    </div>
                    
                    <br />

                    <button className="btn btn-sm btn-secondary text-uppercase" type="button" onClick={()=>{this.props.callback(false)}}>Go Back</button>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    {/* <hr className="my-4" />
                    <div className="text-center">
                    Not Signed in?
                    </div>
                    <button className="btn btn-lg btn-seconday btn-block text-uppercase">Sign up Now</button> */}
                    {/* <hr className="my-4" />
                    <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                    <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> */}
                </form>
            </>
        )
    }
}
