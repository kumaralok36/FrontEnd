import React, { Component } from 'react'
import LoaderContext from 'utility/LoaderContext';

export default class RegisterPage extends Component {

    state={
        providerRegisterForm:{
            name:""
        }
    }

    setLoaderState:any;

    componentDidMount(){
        this.setLoaderState(true);

        //TODO Do Stuffs here to register the client
        this.setLoaderState(false);
    }

    render() {
        return (
            <>
            <LoaderContext.Consumer>
                {
                    value=>{
                        this.setLoaderState=value;
                        return <></>
                    }
                }
            </LoaderContext.Consumer>
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <label>Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
              </div>

              <div className="form-label-group">
                <label>Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label">Remember password</label>
              </div>
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              <hr className="my-4"/>
              <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
              <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
        )
    }
}
