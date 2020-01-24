import React, { Component } from 'react'
import LoaderContext from 'utility/LoaderContext';
import HttpCall from 'utility/HttpCall';
import BackendUrls from 'utility/BackendUrls';
import Utility from 'utility/Utility';
import MessageUtility from 'utility/MessageUtility';
import mHistory from 'mHistory';

export default class LoginPage extends Component {
	state = {
		loginForm: {
			email: "",
			password: ""
		}
	}
	setLoaderState: any
	changeLoginFormData = (event) => {
		this.setState({
			loginForm: { ...this.state.loginForm, [event.target.name]: event.target.value }
		})
	}
	

	submitLogin = (event) => {
		this.setLoaderState(true);

		HttpCall.callUrl(BackendUrls.formUrl(BackendUrls.URLS.User.Login.url), "POST", this.state.loginForm, data => {
			this.setLoaderState(false);
			console.log(data.data);
			Utility.signIn(data.data.sessionToken, data.data.userType, data.data.userName);
			mHistory.push("/user")
		}, error => {
			this.setLoaderState(false);
			Utility.showNotification("danger", MessageUtility.messages.ERROR_GENERAL);
		})
		event.preventDefault();
	}

	render() {
		return (
			<>
				<LoaderContext.Consumer>
					{
						value => {
							this.setLoaderState = value;
							return <></>
						}
					}
				</LoaderContext.Consumer>
				<div className="container">
					<div className="row">
						<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
							<div className="card card-signin my-5">
								<div className="card-body">
									<h5 className="card-title text-center">Sign In</h5>
									<form className="form-signin" onSubmit={(event) => { this.submitLogin(event) }}>
										<div className="form-label-group">
											<label>Email address</label>
											<input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" value={this.state.loginForm.email} onChange={(event) => { this.changeLoginFormData(event) }} required />
										</div>

										<div className="form-label-group">
											<label>Password</label>
											<input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.loginForm.password} onChange={(event) => { this.changeLoginFormData(event) }} required />
										</div>

										<div className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" id="customCheck1" />
											<label className="custom-control-label">Remember password</label>
										</div>
										<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
										<hr className="my-4" />
										<button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
										<button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
