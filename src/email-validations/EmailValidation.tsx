import React, { Component } from 'react'
import Utility from 'utility/Utility'
import { ValidationUtility } from 'utility/ValidationUtility'
import mHistory from 'mHistory'

const USERTYPE = "type",
EMAIL = "email",
TOKEN = "token"


export default class EmailValidation extends Component {
    state={
        type : -1,
        email : "",
        token : ""
    }
    constructor(props) {
        super(props)

        let type = ValidationUtility.validateNumber(Utility.getUrlParameter(USERTYPE));
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
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
