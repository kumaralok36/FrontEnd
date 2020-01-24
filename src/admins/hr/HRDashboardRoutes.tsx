import React from "react";
import HRNavBar from "./components/HRNavBar";
import HRSideBar from "./components/HRSideBar";
import { Switch, Router, Route, Redirect } from "react-router";

import history from "mHistory";
import HRDashboard from "./body/HRDashboard";
import routes from "./routes";
import Utility from "utility/Utility";
import mHistory from "mHistory";

export default class HRDahboardRoutes extends React.Component {
    state = {
        activeIndex:1,
        activeBody:HRDashboard
    }
    constructor(props:any) {
        super(props)    
    }

    componentWillMount(){
        if(Utility.getUserType()!=Utility.userTypes.hr){
            Utility.signOut();
            mHistory.push("/");
        }
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
                <HRSideBar changeSelection={this.changeSelection} activeIndex={this.state.activeIndex}/>
                <div className="main-panel">
                    <HRNavBar changeSelection={this.changeSelection}/>
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