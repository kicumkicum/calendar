const initialState = [
	new Date()
];


/**
 * @param {Array<Date>} state
 * @param {Object} action
 * @return {Array<Date>}
 */
const today = (state = initialState, action) => {
	if (action.type === todayActionType.TODAY_CHANGE) {
		return [
			...state,
			action.payload
		];
	}

	return state;
};


/**
 * @enum {string}
 */
const todayActionType = {
	TODAY_CHANGE: 'today-change'
};


export {today, todayActionType};
