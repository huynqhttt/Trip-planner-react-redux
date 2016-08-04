import React, { Component, PropTypes } from 'react';
import { TextField, Checkbox, RaisedButton, FlatButton } from 'material-ui';
import { Link } from 'react-router';
import * as actions from '../../actions';

class LoginForm extends Component { 
	constructor(props){
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this);
		this.checkEmail = this.checkEmail.bind(this);
		this.require = this.require.bind(this);
		this.state={
			errors: null
		}
	}
	handleSubmit(e){
		e.preventDefault();
		const { store } = this.context;

		const username = this.refs.username.input.value;
		const password = this.refs.password.input.value;
		const errors = {};
		//validation
		if(this.require(username)){
			errors.username = 'Require';
		} else if (this.checkEmail(username)) {
			errors.username = 'Invalid Email';
		}

		if(this.require(password)){
			errors.password = 'Require';
		}

		if(Object.keys(errors).length!==0 && errors.constructor===Object){
			this.setState({
				errors: errors
			})
		} else {
			this.setState({
				errors: null
			})
			console.log(store)
			//send user's information to server
			this.context.router.push('/home');
			
		}

	}
	require(input){
		if(!input.trim()){
			return true
		} 
		return false
	}
	checkEmail(input){
		if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input)){
			return true
		}
		return false
	}
	render(){
		const { store } = this.context;
		return (
			<form>
				<TextField
					floatingLabelText="Username"
					fullWidth={true}
					hintText="example@triip.com"
					ref="username"
					errorText = {this.state.errors ? this.state.errors.username : ''}
				/>
				<TextField
					floatingLabelText="Password"
					fullWidth={true}
					type="password"
					ref="password"
					errorText = {this.state.errors ? this.state.errors.password : ''}
				/>
				<Checkbox
					label="Remember me"
					className="login-remember"
					ref="remember"
				/>
				<RaisedButton
					label="Login"
					primary={true}
					fullWidth={true}
					onClick={this.handleSubmit}
				/>
				<p className="login-info">
						<FlatButton 
							label="Create new account"
							primary={true}
						/>
						|
						<FlatButton
							label="Forgot your password"
							primary={true}
						/>
				</p>
				<p>{store.getState().user.title}</p>
			</form>
		)
	}	
} 

LoginForm.contextTypes = {
	store: PropTypes.object,
	router: PropTypes.object
}

export default LoginForm;