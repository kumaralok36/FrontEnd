import React, {useState} from 'react';
import logo from './logo.svg';
import { Router, Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import history from "./mHistory";
import UserDahboardRoutes from './users/UserDashboardRoutes';
import HomePage from 'home/HomePage';
import LoginPage from 'login/LoginPage';
import RegisterPage from 'register/RegisterPage';
import LoaderContext from 'utility/LoaderContext';

import "./assets/css/css-loader.css"

const App: React.FC = () => {
	const [loadingState, loadingFunc] = useState(false);
	function setLoaderState(b: boolean) {
		console.log("Loading : "+b);
		loadingFunc(b)
	}

	return (
		<>
			<div id="loader">
				{/* <div className="loading">Loading...</div> */}
				{loadingState&&<div className="loading">Loading...</div>}
			</div>
			<LoaderContext.Provider value={setLoaderState}>
				<Router history={history}>
					<div>
						<Switch>
							<Route path="/home"><HomePage /></Route>
							<Route path="/login"><LoginPage /></Route>
							<Route path="/register"><RegisterPage /></Route>
							<Route path="/user">
								<UserDahboardRoutes />
							</Route>
							<Route path="/admin"></Route>
							<Route path="/hr"></Route>
							<Route path="/provider"></Route>
							<Redirect from="/" to="/home" />
						</Switch>
					</div>
				</Router>
			</LoaderContext.Provider>
		</>
	);
}

export default App;
