import React from 'react';
import mHistory from 'm-history';
import { Link } from 'react-router-dom';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    login = () => {
        sessionStorage.setItem("username",this.state.username);
        // mHistory.push("/home")
    }

    goToRegister = () => {
        mHistory.push("/register");
    }

    render() {
        return (
            <div className="container main">
                <div className="row mt-5 m-auto">
                    <div className="card col-lg-5 m-auto " >
                        <div className="card-body">
                            <div className="card-title text-center">
                                <h5 style={{ color: "black" }}>Login</h5>
                            </div>
                            <form action="/home">
                                <div >
                                    <label>Email:</label>
                                    <input type="email"  className="form-control" placeholder="email" onChange={this.handleChangeUsername} required />
                                </div><br />
                                <div>
                                    <label >Password:</label>
                                    <input type="password" className="form-control" placeholder="password" onChange={this.handleChangePassword} required />
                                </div>

                                <button className="btn btn-danger mt-2 " type="submit" onClick={() => this.login()}>Login</button>
                            </form>
                            
                        </div>
                        <div className="card-footer m-auto">
                                <span style={{color:"black",margin:"10px"}}>New user</span>
                                <Link style={{color:"blue"}}onClick={() => this.goToRegister()}>Register</Link>
                            </div>


                    </div>
                </div>
            </div>
        )
    }
}