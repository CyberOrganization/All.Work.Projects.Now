import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import withNavigation from '../navigation/withNavigation';
import withParams from '../Parameters/withParams';


class TodoApp extends Component {
	render() {
		const LoginComponentWithNavigation = withNavigation(LoginComponent);

		const WelcomeComponentWithParams = withParams(WelcomeComponent);
		return (
			<div className='TodoApp'>
				<Router>
					<HeaderComponent />
					<Routes>
						<Route path='/' element={<LoginComponentWithNavigation />} />
						<Route path='/login' element={<LoginComponentWithNavigation />} />
						<Route
							path='/welcome/:name'
							element={<WelcomeComponentWithParams />}
						/>
						<Route path='todos' element={<ListTodosComponent />} />
                        <Route path='logout' element={<LogoutComponent />} />
						<Route path='*' element={<ErrorComponent />} />
					</Routes>

					<FooterComponent />
				</Router>
			</div>
		);
	}
}

class HeaderComponent extends Component {
	render() {
		return (
			<header>
				<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
					<div>
						<a href='http://www.in28minutes.com' className='navbar-brand'>in28Minutes</a>
					</div>
					<ul className='navbar-nav'>
						<li><Link className='nav-link' to="/welcome/in28minutes" >Home </Link></li>
						<li><Link className='nav-link' to="/todos"   >Todos</Link></li>
					</ul>
					<ul className='navbar-nav navbar-collapse justify-content-end'>
						<li><Link  className='nav-link' to="/login" >Login</Link></li>
						<li> <Link className='nav-link' to="/logout" >Logout</Link></li>
					</ul>
				</nav>
			</header>
		);
	}
}

class FooterComponent extends Component {
	render() {
		return (
			<footer className='footer'>
              <span className='text-muted'>All Rights Reserved 2018 @in28minutes</span>  
            </footer>
		);
	}
}

class LogoutComponent extends Component {
	render() {
		return (
			<>
				<h1> You are logged out</h1>
                <div className='container'> Thank you for Using Our Application</div>
			</>
		);
	}
}




class ListTodosComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					description: 'Learn React',
					done: false,
					targetDate: new Date(),
				},
				{
					id: 2,
					description: 'Lose Weight',
					done: false,
					targetDate: new Date(),
				},
				{
					id: 3,
					description: 'Go to Costa Rica',
					done: false,
					targetDate: new Date(),
				},
			],
		};
	}

	render() {
		return (
			<div>
				<h1>List Todos</h1>

				<table>
					<thead>
						<tr>
							<th>id</th>
							<th>description</th>
							<th>Is Completed</th>
							<th>Target Date</th>
						</tr>
					</thead>
					<tbody>
						{this.state.todos.map((todo) => (
							<tr key={todo.id}>
								<td>{todo.id}</td>
								<td>{todo.description}</td>
								<td>{todo.done.toString()}</td>
								<td>{todo.targetDate.toString()}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

class LoginComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'in28minutes',
			password: '',
			hasLoginFailed: false,
			showSuccessMessage: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.loginClicked = this.loginClicked.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	loginClicked() {
		if (
			this.state.username === 'in28minutes' &&
			this.state.password === 'dummy'
		) {
			this.props.navigate(`/welcome/${this.state.username}`);
		} else {
			this.setState({ showSuccessMessage: false });
			this.setState({ hasLoginFailed: true });
		}
		console.log(this.state);
	}

	render() {
		return (
			<div>
				{this.state.hasLoginFailed && (
					<div className='alert alert-warning'>Invalid Credentials</div>
				)}
				{this.state.showSuccessMessage && <div>Login Sucessful</div>}
				<div className='TodoApp'>
					User Name:{' '}
					<input
						type='text'
						name='username'
						value={this.state.username}
						onChange={this.handleChange}
					/>
					Password:{' '}
					<input
						type='password'
						name='password'
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button onClick={this.loginClicked}>Login</button>
				</div>
			</div>
		);
	}
}

function ErrorComponent() {
	return (
		<div>
			An Error Occurred. I don't know what to do! Contact support at
			abcd-efgh-ijkl
		</div>
	);
}

class WelcomeComponent extends Component {
	render() {
		return (
			<div>
				Welcome {this.props.params.name}. You can manage your todos{' '}
				<Link to='/todos'>here</Link>.
			</div>
		);
	}
}

export default TodoApp;
