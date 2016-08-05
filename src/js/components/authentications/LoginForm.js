import React, { Component, PropTypes } from 'react';
import { TextField, Checkbox, RaisedButton, FlatButton } from 'material-ui';
import { Link } from 'react-router';
import { users } from '../../../data/users';
import { ErrorBoard } from '../messageNotification';

class LoginForm extends Component { 
	constructor(props, context){
		super(props, context)
		this.handleSubmit = this.handleSubmit.bind(this);
		this.checkEmail = this.checkEmail.bind(this);
		this.require = this.require.bind(this);
		this.state={
			errors: null
		}
	}
	componentWillMount(){
		const { user, router } = this.context;
		if(user.status){
			//go to homepage if user has loginned successfully
			router.push('/home')
		}
	}
	handleSubmit(e){
		e.preventDefault();
		const inputName = this.refs.username.input.value;
		const inputPass = this.refs.password.input.value;
		let errors = {};
		//validation
		if(this.require(inputName)){
			errors.username = 'Require';
		} else if (this.checkEmail(inputName)) {
			errors.username = 'Invalid Email';
		}

		if(this.require(inputPass)){
			errors.password = 'Require';
		}

		if(Object.keys(errors).length!==0 && errors.constructor===Object){
			this.setState({
				errors: errors
			})
		} else {
			users.forEach( ({username, password, fullname}) => {
				if(username.localeCompare(inputName)===0 && password.localeCompare(inputPass)===0){
					//save user's information to context
					this.props.updateUser({
						status: true,
						username: username,
						password: password,
						fullname: fullname
					});
					//console.log(this.context.user);
					this.context.router.push('/home');
				}
			})
			//show error login fail
			errors.login = 'Username or password is incorrect'
			this.setState({
				errors: errors
			})
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
		return (
			<form>
				{this.state.errors && this.state.errors.login ? <ErrorBoard text={this.state.errors.login} /> : ''}
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
							onClick={() => this.context.router.push('/signup')}
						/>
						|
						<FlatButton
							label="Forgot your password"
							primary={true}
							onClick={() => this.context.router.push('/forgotPassword')}
						/>
				</p>
			</form>
		)
	}	
} 

LoginForm.contextTypes = {
	store: PropTypes.object,
	router: PropTypes.object,
	user: PropTypes.object
}

export default LoginForm;