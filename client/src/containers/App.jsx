// React-Redux injections
import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
//-------------------------

// material-ui components
import Button from 'material-ui/Button';
//-------------------------

// project components
import GreetingsPage from 'components/GreetingsPage.jsx';
import LoginForm from '../components/LoginForm.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
//-------------------------

export default class App extends Component {
	render() {
		return (
      <Provider key={ module.hot ? Date.now() : store} store={store}>
				<Router exact path="/">
				<Link to="/"><button>Main</button></Link>
					<div>
						<ul>
							<li>
								<Link to="/"><button>Main</button></Link>
							</li>
							<li>
								<Link to="/login">Login</Link>
							</li>
							<li>
								<Link to="/registration">Registration</Link>
							</li>
						</ul>
						<div class="wrapper">
							<Route path="/login" component={LoginForm} />
							<Route path="/registration" component={RegistrationForm} />
						</div>
					</div>
				</Router>
      </Provider>
		)
	}
}

