import {Calendar} from '../services/calendar';
import {eventsActions} from './events';


/**
 * @param {Calendar} calendar
 * @return {function(Array<Date>, Object): Array<Date>}
 */
const month = (calendar) => {
	const selectedMonth = calendar.getCurrentMonth();
	const initialState = {
		selectedMonth: selectedMonth,
		prevMonth: calendar.getPrevMonth(selectedMonth.year, selectedMonth.month),
		nextMonth: calendar.getNextMonth(selectedMonth.year, selectedMonth.month)
	};

	return (state = initialState, action) => {
		if (action.type === monthActionType.PRESS_ARROW) {
			// TODO: Resolve cyclical deps
			if (action.payload === 'next') {
				const selectedMonth = calendar.selectNextMonth();
				return {
					selectedMonth: selectedMonth,
					prevMonth: calendar.getPrevMonth(selectedMonth.year, selectedMonth.month),
					nextMonth: calendar.getNextMonth(selectedMonth.year, selectedMonth.month)
				};
			} else if (action.payload === 'prev') {
				const selectedMonth = calendar.selectPrevMonth();
				return {
					selectedMonth: selectedMonth,
					prevMonth: calendar.getPrevMonth(selectedMonth.year, selectedMonth.month),
					nextMonth: calendar.getNextMonth(selectedMonth.year, selectedMonth.month)
				};
			}
		} else if (action.type === eventsActions.ADD_EVENT) {
			// TODO:
		} else if (action.type === eventsActions.REMOVE_EVENT) {
			// TODO:
		}

		return state;
	};
};


/**
 * @enum {string}
 */
const monthActionType = {
	PRESS_ARROW: 'press-arrow'
};


export {month, monthActionType};
