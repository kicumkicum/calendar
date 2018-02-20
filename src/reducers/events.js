import EventsService from '../services/events';


/**
 * @const {number}
 */
const MAX_LENGTH = 10;


/**
 * @param {EventsService} eventService
 * @return {function(*=, *)}
 */
export default (eventService) => {
	const initialState = eventService.getAllEvents();

	return (state = initialState, action) => {
		if (action.type === eventsActions.ADD_EVENT) {
			const {description, date} = action.payload;
			const newEvent = eventService.addEvent(description.substr(0, MAX_LENGTH), description, date);

			return [
				...state,
				newEvent
			];
		} else if (action.type === eventsActions.REMOVE_EVENT) {
			eventService.removeEvent(action.payload);
			return eventService.getAllEvents();
		}

		return state;
	};
};


/**
 * @enum {string}
 */
export const eventsActions = {
	ADD_EVENT: 'add-event',
	REMOVE_EVENT: 'remove-event'
};
