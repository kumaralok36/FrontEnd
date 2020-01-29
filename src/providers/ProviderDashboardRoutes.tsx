import React from "react";
import ProviderNavBar from "./components/ProviderNavBar";
import ProviderSideBar from "./components/ProviderSideBar";
import { Switch, Router, Route, Redirect } from "react-router";

import history from "mHistory";
import ProviderDashboard from "./body/ProviderDashboard";
import routes from "./routes";
import Utility from "utility/Utility";
import mHistory from "mHistory";

export default class ProviderDashboardRoutes extends React.Component {
    state = {
        activeIndex:0,
        activeBody:ProviderDashboard
    }
    constructor(props:any) {
        super(props)    
    }

    componentWillMount(){
        if(Utility.getUserType()!=Utility.userTypes.provider){
            Utility.signOut();
            mHistory.push("/");
        }
    }

    componentDidMount(){
        
    }
    
    changeSelection = (n:number)=>{
        if(n<routes.length-1){
            this.setState({
                activeIndex:n,
                activeBody:routes[n].component
            })
        }else{
            Utility.signOut();
            history.push("/")
        }
        
    }

    render() {
        return (
            <div className="wrapper ">
                <ProviderSideBar changeSelection={this.changeSelection} activeIndex={this.state.activeIndex}/>
                <div className="main-panel">
                    <ProviderNavBar changeSelection={this.changeSelection}/>
                    <div className="content">
                        <div className="container-fluid">
                            {<this.state.activeBody />}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}