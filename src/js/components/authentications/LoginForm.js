import React from 'react';
import { TextField, Checkbox, RaisedButton } from 'material-ui';
import { Logo } from '../elements';
import { Link } from 'react-router';

const LoginForm = () => (
	<div>
		<div className="row center-xs">
			<div 
				className="login-icon col-xs-5 col-sm-4 col-md-2 col-lg-1"
			>
				<Logo />	
			</div>
		</div>
		<div className="row center-xs">
			<div className="col-xs-10 col-sm-8 col-md-5 col-lg-3">
				<TextField
					floatingLabelText="Username"
					fullWidth={true}
					hintText="example@triip.com"
				/>
				<TextField
					floatingLabelText="Password"
					fullWidth={true}
					type="password"
				/>
				<Checkbox
					label="Remember me"
					className="login-remember"
				/>
				<p className="login-info">
						<Link to="/signup">Do not have an account yet? Register and become an author!</Link>
						*If you did not receive an activation email, check your spam folder to make sure it did not end up there.
				</p>
				<RaisedButton
					label="Login"
					primary={true}
					fullWidth={true}
				/>
			</div>
		</div>
	</div>
);

export default LoginForm;