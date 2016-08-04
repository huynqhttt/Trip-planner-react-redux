import React from 'react'

export const user = (state={}, action) => {
	switch(action.type){
		case 'GET_MOVIE':
		debugger;
			return {...state, data: action.payload.data };
		default:
			return state;
	}
}

export default user;