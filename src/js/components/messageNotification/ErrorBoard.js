import React, { PropTypes } from 'react'
import { Paper } from 'material-ui'

const style = {
	marginTop: 20,
	padding: 5,
	borderLeft: '4px solid #bf2a5c',
	color: '#bf2a5c'
}

const ErrorBoard = (props) => (
	<Paper 
		style={style} 
		zDepth={2}
	>
		{props.text}
	</Paper>
)

ErrorBoard.propTypes = {
	text: PropTypes.string.isRequired
}

ErrorBoard.defaultProps = {
	text: 'Error Paper'
}

export default ErrorBoard