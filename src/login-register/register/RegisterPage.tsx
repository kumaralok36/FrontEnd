import React, { Component } from 'react'
import LoaderContext from 'utility/LoaderContext';
import UserRegistrationForm from './components/UserRegistrationForm';

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
            <UserRegistrationForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</>
        )
    }
}
