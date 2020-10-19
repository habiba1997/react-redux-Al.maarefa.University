
import * as actions from '../actionTypes';
const initialState = {
	data : [],
	length: 0
  };

export default function reducer(state=initialState, action) {

	switch (action.type) {
		case actions.RETRIEVE_RECORDS:
			
			return {
				...state,
				data: action.payload.data,
				length: action.payload.length
			  };

		case actions.RCORDS_LENGTH:
			return  {
				...state,
				length: action.payload.length
			  };

		default:
			return state;
	}
}