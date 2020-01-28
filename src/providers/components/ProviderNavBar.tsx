import React, { Component } from 'react'
import routes from 'users/routes';
import UserProfile from 'users/body/UserProfile';

interface Props{
    changeSelection:(n:number)=>any
}
export default class ProviderNavBar extends Component<Props, any> {
    state={
        notifications:[1,2,3]
    }
    goToProfile = ()=>{
        for(let i=0;i<routes.length;i++){
            if(routes[i].component==UserProfile){
                this.props.changeSelection(i);
                break;
            }
        }
    }
    logout = ()=>{
        this.props.changeSelection(routes.length-1);
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                        <div className="navbar-wrapper">
                            <a className="navbar-brand" href="#pablo">Dashboard</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">notifications</i>
                                        {this.state.notifications.length>0&&<span className="notification">{this.state.notifications.length}</span>}
                                        <p className="d-lg-none d-md-block">
                                            Some Actions
                  </p>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        {this.state.notifications.map((notif)=>{
                                            return (<a className="dropdown-item" href="#">Mike John responded to your email</a>);
                                        })}                                        
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#pablo" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">person</i>
                                        <p className="d-lg-none d-md-block">
                                            Account
                  </p>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                                        <a className="dropdown-item" style={{
                                            cursor:"pointer"
                                        }} onClick={()=>{this.goToProfile()}}>Profile</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" style={{
                                            cursor:"pointer"
                                        }} onClick={()=>{this.logout()}}>Log out</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}