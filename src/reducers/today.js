const initialState = [
	new Date()
];


/**
 * @param {Array<Date>} state
 * @param {Object} action
 * @return {Array<Date>}
 */
export default (state = initialState, action) => {
	if (action.type === todayActions.TODAY_CHANGE) {
		return action.payload;
	}

	return state;
};


/**
 * @enum {string}
 */
export const todayActions = {
	TODAY_CHANGE: 'today-change'
};
