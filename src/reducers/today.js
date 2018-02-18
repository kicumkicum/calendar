const initialState = [
	new Date()
];


/**
 * @param {Array<Date>} state
 * @param {Object} action
 * @return {Array<Date>}
 */
const today = (state = initialState, action) => {
	if (action.type === todayActions.TODAY_CHANGE) {
		return action.payload;
	}

	return state;
};


/**
 * @enum {string}
 */
const todayActions = {
	TODAY_CHANGE: 'today-change'
};


export {today, todayActions};
