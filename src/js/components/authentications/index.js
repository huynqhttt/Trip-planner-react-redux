import LoginForm from './LoginForm';
import { Logo } from '../elements';
import React from 'react';

const Authentications = ({ updateUser }) => (
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
				<LoginForm updateUser={updateUser} />
			</div>
		</div>
	</div>
);

export default Authentications;