import React, { useState } from 'react';
import logo from './logo.svg';
import { Router, Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import history from "./mHistory";
import UserDahboardRoutes from './users/UserDashboardRoutes';
import HomePage from 'home/HomePage';
import LoginPage from 'login-register/login/LoginPage';
import RegisterPage from 'login-register/register/RegisterPage';
import LoaderContext from 'utility/LoaderContext';

import "./assets/css/css-loader.css"
import TemplateModal from 'utility/TemplateModal';
import ModalContext from 'utility/ModalContext';
import SessionBookingRoute from 'session/SessionBookingRoute';
import LoginRegisterRoute from 'login-register/LoginRegisterRoute';
import ProviderDashboardRoutes from 'providers/ProviderDashboardRoutes';
import AdminDahboardRoutes from 'admins/super/AdminDashboardRoutes';
import HRDahboardRoutes from 'admins/hr/HRDashboardRoutes';

class App extends React.Component {
	// const [loadingState, loadingFunc] = useState(false);
	// const [modalContainer, changeModal] = useState(TemplateModal);
	state = {
		loadingState: false,
		showModal: false,
		modalContainer: undefined,
		modalCallback: () => { }
	}
	setLoaderState = (b: boolean) => {
		console.log("Loading : " + b);
		// loadingFunc(b)
		this.setState({ loadingState: b })
	}
	showModal = (component, callback) => {
		// changeModal(component)
		console.log("Attempting to show Modal");
		this.setState({
			showModal: true,
			modalContainer: component,
			modalCallback: callback
		})
	}
	render() {
		return (
			<>
				<div id="loader">
					{/* <div className="loading">Loading...</div> */}
					{this.state.loadingState && <div className="loading">Loading...</div>}
				</div>

				<LoaderContext.Provider value={this.setLoaderState}>
					<ModalContext.Provider value={this.showModal}>
						{this.state.showModal && <this.state.modalContainer callback={this.state.modalCallback} />}
						<Router history={history}>
							<Switch>
								<Route path="/home"><HomePage /></Route>
								<Route path="/login"><LoginRegisterRoute login={true} /></Route>
								<Route path="/register"><LoginRegisterRoute login={false} /></Route>
								<Route path="/book"><SessionBookingRoute /></Route>
								<Route path="/user"><UserDahboardRoutes /></Route>
								<Route path="/admin"><AdminDahboardRoutes /></Route>
								<Route path="/hr"><HRDahboardRoutes /></Route>
								<Route path="/provider"><ProviderDashboardRoutes /></Route>
								<Redirect from="/" to="/home" />
							</Switch>
						</Router>
					</ModalContext.Provider>
				</LoaderContext.Provider>
			</>
		);
	}
}

export default App;
