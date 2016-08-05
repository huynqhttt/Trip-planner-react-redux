import React, { Component, PropsType } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle, FlatButton } from 'material-ui';

import { trips } from '../../../data/trips';

import TripCard from './TripCard';

const style = {
	backgroundColor: '#fff'
};

const getData = () => {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "../../../data/trips.json", true);
	xhr.onload = (e) => {
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				return JSON.parse(xhr.responseText).trips;
			} else {
				console.error(xhr.statusText)
			}
		}
	};
	xhr.onerror = (e) => {
		console.error(xhr.statusText)
	};
	xhr.send(null);
}

export default class Trip extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: []
		}
	}

	componentDidMount(){
		//console.log(this.state.data.concat(trips));
		this.setState({
			data: trips
		})

	}
	render(){
		return (
			<div>
				<div className="row center-xs padding-20">
					<div className="col-xs-9">
						<Toolbar style={style}>
							<ToolbarGroup firstChild={true}>
								<ToolbarTitle text="Upcomming trips" />
							</ToolbarGroup>

							<ToolbarGroup>
								<FlatButton label="Create a Trip" primary={true} />
							</ToolbarGroup>
						</Toolbar>
					</div>
					<TripCard data={this.state.data} />
				</div>
			</div>
		)
	}
}