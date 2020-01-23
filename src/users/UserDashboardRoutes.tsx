import React from "react";
import UserNavBar from "./components/UserNavBar";
import UserSideBar from "./components/UserSideBar";
import { Switch, Router, Route, Redirect } from "react-router";

import history from "mHistory";
import UserDashboard from "./body/UserDashboard";
import routes from "./routes";
import Utility from "utility/Utility";
import mHistory from "mHistory";

export default class UserDahboardRoutes extends React.Component {
    state = {
        activeIndex:0,
        activeBody:UserDashboard
    }
    constructor(props:any) {
        super(props)    
    }

    componentWillMount(){
        if(Utility.getUserType()!=Utility.userTypes.user){
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
                <UserSideBar changeSelection={this.changeSelection} activeIndex={this.state.activeIndex}/>
                <div className="main-panel">
                    <UserNavBar changeSelection={this.changeSelection}/>
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