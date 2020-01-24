import React, { Component } from 'react'
import LoaderContext from 'utility/LoaderContext';

export default class ProviderRegisterForm extends Component {
    state={
        registerForm:{
            name:"",
            email:"",
            password:"",
            repassword:"",
            education:""
        }
    };
    setLoaderState:any;

    componentDidMount(){
        
    }

    onSubmit=(event)=>{

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
                <form onSubmit={()=>{this.onSubmit(event)}}>
                    <input name="firstName"/>
                    <input name="lastName"/>

                </form>
            </>
        )
    }
}
