import React, { Component } from 'react'
import Utility from 'utility/Utility'
import { ValidationUtility } from 'utility/ValidationUtility'
import mHistory from 'mHistory'

const VALIDATION_TYPE = "type",
EMAIL = "email",
TOKEN = "token"

const emailValidationType={
    userValidation:1,
}


export default class EmailValidation extends Component {
    state={
        type : -1,
        email : "",
        token : ""
    }
    constructor(props) {
        super(props)

        let type = ValidationUtility.validateNumber(Utility.getUrlParameter(VALIDATION_TYPE));
        let email = ValidationUtility.validateEmail(Utility.getUrlParameter(EMAIL));
        console.log(Utility.getUrlParameter(EMAIL));
        if(type==NaN || !email){
            console.log("XXXX -> ", type, email);
            mHistory.push("/");
        }else{
            this.state={
                type : type,
                email : email,
                token : Utility.getUrlParameter(TOKEN),
            }
        }
        
    }

    componentDidMount(){
        if(this.state.type==emailValidationType.userValidation){
            //TODO Call the URL for getting details on user type
        }else{
            mHistory.push("/")
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
