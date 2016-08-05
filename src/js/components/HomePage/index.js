import React, { Component, PropTypes} from 'react';
import axios from 'axios';
import Header from './Header';
import Trip from '../Trip';

export default class HomePage extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}
	componentWillMount(){
		const { user, router } = this.context;
		if(!user.status){
			router.push('/');
		}
	}
	componentWillUnMount(){
		axios.get('http://facebook.github.io/react-native/movies.json')
			.then((response) => {
				this.setState({
					data: response.data.movies
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}
	render(){
		return (
			<div>
				<Header updateUser={this.props.updateUser} />
				<Trip />
			</div>
		)
	}
}

HomePage.contextTypes = {
	user: PropTypes.object,
	router: PropTypes.object
}
