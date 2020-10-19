import * as actions from './actionTypes';
import array from './data';

const payload = {
	data : array,
	length: array.length
  };

export const retrieveRecords = () => {
	return ({
		type: actions.RETRIEVE_RECORDS,
		payload: payload
	});
};
export const arrayLength = () => ({
	type: actions.RCORDS_LENGTH,
});

export const fetchRecordsUsingJSON = () => dispatch => {
	fetch('/data.json')
	  .then(res => res.json())
	  .then(records =>
		{	
			dispatch({
				type: actions.RETRIEVE_RECORDS,
				payload: records
			  });
		}
	  );
  };

 
  
