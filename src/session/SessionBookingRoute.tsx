import React, { Component } from 'react'
import SessionType from './SessionType';
import SessionTypeComponent from './components/SessionTypeComponent';
import SessionSubTypeComponent from './components/SessionSubTypeComponent';
import ProviderSelectionComponent from './components/ProviderSelectionComponent';
import LoginPage from 'login-register/login/LoginPage';
import PaymentComponent from './components/PaymentComponent';
import Utility from 'utility/Utility';
import LoginRegisterRoute from 'login-register/LoginRegisterRoute';

export default class SessionBookingRoute extends Component {

    state={
        state:0,
        sessionType:0,
        subCategory:[],
        providerId:""
    }
    onSelectSessionType=(ind:number)=>{
        this.setState({
            state:1,
            sessionType:ind
        })

    }
    onSelectSessionSubType=(sInds:string[])=>{
        if(sInds.length==0){
            this.setState({
                state:0,
                subCategory:[]
            })
        }else{
            this.setState({
                state:2,
                subCategory:sInds
            })
        }
    }
    onSelectProviders=(providerID:string)=>{
        if(Utility.isLoggedIn()){
            this.setState({state:4});
        }else{
            this.setState({state:3});
        }
    }
    onLoginDone=(params:any)=>{

    }
    render() {
        return (
            <div style={{
                backgroundColor:"white"
            }}>
                <div className="container">

                    <div className="row">
                        <div className="mx-auto">
                            <img src="assets/img/new_logo.png" width="100px" className="img rounded-circle"/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="mx-auto">
                            <h3>
                                Therapy on Demand
                        </h3>
                        </div>

                    </div>

                    {/* <hr /> */}
                </div>

                <br />

                {this.state.state==0&&<SessionTypeComponent callback={this.onSelectSessionType}/>}
                {this.state.state==1&&<SessionSubTypeComponent callback={this.onSelectSessionSubType} ind={this.state.sessionType}/>}
                {this.state.state==2&&<ProviderSelectionComponent callback={this.onSelectProviders} sessionType={this.state.sessionType}/>}
                {this.state.state==3&&<LoginRegisterRoute login={true} callback={this.onLoginDone}/>}
                {this.state.state==4&&<PaymentComponent/>}
            </div>
        )
    }
}
