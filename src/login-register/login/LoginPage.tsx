import React, { Component } from 'react'
import LoaderContext from 'utility/LoaderContext';
import HttpCall from 'utility/HttpCall';
import BackendUrls from 'utility/BackendUrls';
import Utility from 'utility/Utility';
import MessageUtility from 'utility/MessageUtility';
import mHistory from 'mHistory';
import UserLoginComponent from './components/UserLoginComponent';
import ProviderLoginComponent from './components/ProviderLoginComponent';
import HRLoginComponent from './components/HRLoginComponent';
import AdminLoginComponent from './components/AdminLoginComponent';

export default class LoginPage extends Component {
	state={
		loginType:0
	}
	changeType=(n)=>{
		this.setState({loginType:n})
	}
	render() {
		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
							<div className="card card-signin my-5">
								<div className="card-body">
									<h5 className="card-title text-center">Sign In</h5>
									<br />
									<div className="container">
										<div className="row">
											<div className="col-md-6">
												<button className={`btn ${this.state.loginType==0?'btn-primary':'btn-default'} btn-block`} onClick={()=>{this.changeType(0)}}>
													<i className="material-icons">work</i> Users
											  </button>
											</div>
											<div className="col-md-6">
												<button className={`btn ${this.state.loginType==1?'btn-primary':'btn-default'} btn-block`} onClick={()=>{this.changeType(1)}}>
													<i className="material-icons">work</i> Providers
											  </button>
											</div>
											<div className="col-md-6">
												<button className={`btn ${this.state.loginType==2?'btn-primary':'btn-default'} btn-block`} onClick={()=>{this.changeType(2)}}>
													<i className="material-icons">work</i> HR
											  </button>
											</div>
											<div className="col-md-6">
												<button className={`btn ${this.state.loginType==3?'btn-primary':'btn-default'} btn-block`} onClick={()=>{this.changeType(3)}}>
													<i className="material-icons">work</i> Admin
											  </button>
											</div>
										</div>
									</div>
									<br />
									<br />
									{this.state.loginType==0&&<UserLoginComponent />}
									{this.state.loginType==1&&<ProviderLoginComponent />}
									{this.state.loginType==2&&<HRLoginComponent />}
									{this.state.loginType==3&&<AdminLoginComponent />}
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
