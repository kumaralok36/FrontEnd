import React from 'react';
import { Link } from 'react-router-dom';
import Login from 'VeggiPages/Login';
import mHistory from 'm-history';

export default class NavBar extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      loginStatus:false
    }
  }

  getLoginLogout=()=>{
    if(sessionStorage.getItem("username")!==null)
    return "Logout";
    else if(this.state.loginStatus===false)
    return "Login";
  }

  handleChangeLoginStatus=()=>{
    if(sessionStorage.getItem("username")!==null)
    {
      sessionStorage.removeItem("username");
      this.setState({loginStatus:false})
      mHistory.push("/home")
    }
    else
    { this.setState({loginStatus:true})
    mHistory.push("/login");
    }

  }

  getProfile=()=>{
    if(sessionStorage.getItem("username")===null)
      return(
        <div class="dropdown-menu">
          <a class="dropdown-item text-white " href="" onClick={()=>this.handleChangeLoginStatus()} >{this.getLoginLogout()}</a>
      </div>
      )
      else
        return(
          <div class="dropdown-menu">
                  <a class="dropdown-item text-white " href="">Profile</a>
                  <a class="dropdown-item text-white " href="">Orders</a>
                  <a class="dropdown-item text-white " href="" onClick={()=>this.handleChangeLoginStatus()} >{this.getLoginLogout()}</a>
                </div>
        )
  }
  
    render(){
        return(
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
            
            <a class="navbar-brand" href="#">Veggi</a>
          
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/cart">Cart</Link>
              </li>
          
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                  Account
                </Link>
                {this.getProfile()}
              </li>
            </ul>
          </nav> 
        )
    }
}