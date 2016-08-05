import React, { Component, PropTypes } from 'react';
import { AppBar, Paper, Avatar, FlatButton } from 'material-ui';
import { Link } from 'react-router';

class Header extends Component {
	constructor(props, context){
		super(props, context);
		this.logout = this.logout.bind(this)
	}
	logout(){
		this.props.updateUser({
			status: null,
			username:null,
			password: null,
			fullname: null
		});
		this.context.router.push('/')
	}
	render(){
		const { user } = this.context;	
		return(
			<div>
				<AppBar
					title={<span>Triip.planner</span>}
					showMenuIconButton={false}
				/>
				<Paper zDepth={2} >
					<div className="row padding-10">
						<div className="col-xs-offset-2">
							<Avatar 
								src="https://www.traxo.com/v4/images/profile_placeholder.png" 
								size={50}
							/>
						</div>
						<div className="col-xs-8">
							<div>
								{user.fullname}
							</div>
							<div>
								<FlatButton primary={true}>
									<Link to="/home">TimeLine</Link>
								</FlatButton>
								<FlatButton primary={true}>
									<Link to="/home">Trips</Link>
								</FlatButton>
								<FlatButton primary={true}>
									<Link to="/home">Maps</Link>
								</FlatButton>
								<FlatButton primary={true}>
									<Link to="/home">Connections</Link>
								</FlatButton>
								<FlatButton 
									primary={true} 
									label="Log out" 
									onClick={this.logout}
									className="right"
								/>
							</div>
						</div>
					</div>			
				</Paper>
			</div>
		)
	}
};

Header.contextTypes = {
	user: PropTypes.object,
	router: PropTypes.object
}
export default Header;