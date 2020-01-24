import React from "react";
import AdminNavBar from "./components/AdminNavBar";
import AdminSideBar from "./components/AdminSideBar";
import { Switch, Router, Route, Redirect } from "react-router";

import history from "mHistory";
import AdminDashboard from "./body/AdminDashboard";
import routes from "./routes";
import Utility from "utility/Utility";
import mHistory from "mHistory";

export default class AdminDahboardRoutes extends React.Component {
    state = {
        activeIndex:1,
        activeBody:AdminDashboard
    }
    constructor(props:any) {
        super(props)    
    }

    componentWillMount(){
        if(Utility.getUserType()!=Utility.userTypes.admin){
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
                <AdminSideBar changeSelection={this.changeSelection} activeIndex={this.state.activeIndex}/>
                <div className="main-panel">
                    <AdminNavBar changeSelection={this.changeSelection}/>
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