import React, { Component, PropTypes } from 'react';
import { 
	FlatButton, 
	Paper, 
	Avatar,
	Divider,
	IconMenu, MenuItem, IconButton,
} from 'material-ui';
import { 
	ActionPermContactCalendar,
	HardwareKeyboardArrowRight,
	NavigationMenu
} from 'material-ui/svg-icons';

export default class TripCard extends Component {
	constructor(props){
		super(props);
		this.renderTrips = this.renderTrips.bind(this);
		//console(this.props.data);
	}
	componentDidMount(){
		//console.log(this.props.data);
	}
	renderTrips(trips){
		let key=0
		return trips.map((trip) => {
			return(
				<div className="col-xs-12" key={key++} >
					<Paper zDepth={2}>
						<div className="row start-xs padding-10">
							<div className="col-xs-1">
								<Avatar 
									src={trip.imageUrl}
									size={56}
								/>
							</div>
							<div className="col-xs">
								<h3>{trip.name} in 21 days</h3>
							</div>
							<div className="col-xs">
								<div className="row end-xs">
									<h3> {trip.startDate} to {trip.endDate}</h3>
									<div className="margin-top-12">
										<FlatButton primary={true}>Share</FlatButton>
									</div>
									<div className="margin-top-5">
										<IconMenu
								      iconButtonElement={<IconButton><NavigationMenu /></IconButton>}
								      anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
								      targetOrigin={{horizontal: 'right', vertical: 'top'}}
								    >
								    	<MenuItem primaryText="Refresh" />
								    	<Divider />
								      	<MenuItem primaryText="Edit" />
								      	<Divider />
								      	<MenuItem primaryText="Delete" />
								    </IconMenu>
								    <IconButton><HardwareKeyboardArrowRight /></IconButton>
								  </div>
						    </div>
						  </div>
						</div>
					</Paper>
				</div>
			)
		})
	}
	render(){
		const { data } = this.props
		return (
			<div className="col-xs-8">
				{this.renderTrips(data)}	
			</div>
		)
	}
}