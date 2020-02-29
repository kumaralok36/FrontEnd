import React, { Component } from 'react'
import LoaderContext from 'utility/LoaderContext';
import UserRegistrationForm from './components/UserRegistrationForm';
import ProviderRegisterForm from './components/ProviderRegisterForm';
import mHistory from 'mHistory';

interface Props{
  callbackToLogin:()=>void
}
export default class RegisterPage extends Component<Props, any> {

  state = {
    registerType: 0
  }

  setLoaderState: any;

  componentDidMount() {
    this.setLoaderState(true);

    //TODO Do Stuffs here to register the client
    this.setLoaderState(false);
  }
  changeType = (n) => {
    if(n==1){
      mHistory.push("/register-provider");
    }else
      this.setState({ registerType: n })
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
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign Up</h5>
                  <br />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <button className={`btn ${this.state.registerType == 0 ? 'btn-primary' : 'btn-default'} btn-block`} onClick={() => { this.changeType(0) }}>
                          <i className="material-icons">work</i> Users
											  </button>
                      </div>
                      <div className="col-md-6">
                        <button className={`btn ${this.state.registerType == 1 ? 'btn-primary' : 'btn-default'} btn-block`} onClick={() => { this.changeType(1) }}>
                          <i className="material-icons">work</i> Providers
											  </button>
                      </div>
                      <div className="col-md-6">
                        <button className={`btn ${this.state.registerType == 2 ? 'btn-primary' : 'btn-default'} btn-block`} onClick={() => { this.changeType(2) }}>
                          <i className="material-icons">work</i> HR
											  </button>
                      </div>
                      <div className="col-md-6">
                        <button className={`btn ${this.state.registerType == 3 ? 'btn-primary' : 'btn-default'} btn-block`} onClick={() => { this.changeType(3) }}>
                          <i className="material-icons">work</i> Admin
											  </button>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  {this.state.registerType == 0 && <UserRegistrationForm />}
                  {this.state.registerType == 1 && <ProviderRegisterForm />}

                  <hr className="my-4" />
                  <div className="text-center">
                    Already Registered ?
                    </div>
                  <button className="btn btn-lg btn-seconday btn-block text-uppercase" type="button" onClick={() => {
                    this.props.callbackToLogin();
                  }}>Switch to Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
