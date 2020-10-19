
import * as actions from '../actionTypes';
import array from '../data';

const initialState = {
	data : array,
	length: array.length
  };

const end =0;
const records = 5;

export default function reducer(state=initialState, action) {
	switch (action.type) {

		case actions.RETRIEVE_ZERO_PAGE:
			return state.data.slice(end, end + records);

		case actions.FLIP_PAGE_Forward:
			if(end+records < state.length )
			{
				end = end +records;
				return  state.data.slice(end, end+records);
			}
			// else(end+records > state.length)
			// {
				end = 0;
				return  state.data.slice(end, end + records);
			// }
			// break;

		case actions.FLIP_PAGE_Backward:
			let indexBack = end;
			if(indexBack-records >=0)
			{	
				end = indexBack-records;
				return  state.data.slice(end,indexBack);
			}
			// else {
				alert("Error in flip page backward");
				return  state.data.slice(end, end + records);
			// }

		case actions.PAGE_NUMBER:
			return end;
		
		case actions.RCORDS_LENGTH:
			return state.length;

		default:
			return state.data;
	}
}