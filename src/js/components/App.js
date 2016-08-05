import React, { Component, PropTypes, Children, cloneElement } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../muiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap for material-ui
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends Component {
	getChildContext(){
		return{
			user: this.state.user
		}
	}
	constructor(props, context){
		super(props, context);
		this.state = {
			user: {
				status: false,
				username: null,
				password: null,
				fullname: null
			}
		}
		this.updateUser = this.updateUser.bind(this);
	}
	updateUser(user){
		this.setState({user: user})
	}
	render() {
		const children = Children.map(this.props.children, (child) => {
			return cloneElement(child, {
				updateUser: this.updateUser
			})
		})
		return(
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					{children}
				</div>
			</MuiThemeProvider>
		)
	}
};

App.childContextTypes = {
	user: PropTypes.object
}