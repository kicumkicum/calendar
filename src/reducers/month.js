const currentDate = new Date();
const initialState = [{
	month: currentDate.getMonth(),
	year: currentDate.getFullYear()
}];


/**
 * @param {Array<Date>} state
 * @param {Object} action
 * @return {Array<Date>}
 */
const month = (state = initialState, action) => {
	if (action.type === monthActionType.PRESS_ARROW) {
		// TODO: Resolve cyclical deps
		if (action.payload === 'next') {
			// TODO: change current month
		} else if (action.payload === 'prev') {

		}
	}

	return state;
};


/**
 * @enum {string}
 */
const monthActionType = {
	PRESS_ARROW: 'press-arrow'
};


export {month, monthActionType};
