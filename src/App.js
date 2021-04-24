import React, { useContext } from 'react';
import { Router, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import NavBar from 'Utility/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import Login from 'VeggiPages/Login';
import Home from 'VeggiPages/Home';
import Register from 'VeggiPages/Register';
import mHistory from 'm-history';
import Cart from 'VeggiPages/Cart';

const App = () => {

	return (
		<div>
			
			<Router history={mHistory}>

				<NavBar />

				<Switch>
					<Route  path="/login" component={Login}/>
					<Route  path="/register" component={Register}/>
					<Route  path="/cart" component={Cart}/>
					<Route  path="/home" component={Home} />
					<Redirect from="/" to="/login"/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
