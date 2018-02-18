import EventsService from '../services/events';


/**
 * @param {EventsService} eventService
 * @return {function(*=, *)}
 */
const events = (eventService) => {
	const initialState = eventService.getAllEvents();

	return (state = initialState, action) => {
		if (action.type === eventsActions.ADD_EVENT) {
			const {name, description, date} = action.payload;
			const newEvent = eventService.addEvent(name, description, date);

			return [
				...state,
				newEvent
			];
		} else if (action.type === eventsActions.REMOVE_EVENT) {
			eventService.removeEvent(action.payload.id);
			return eventService.getAllEvents();
		}

		return state;
	};
};


/**
 * @enum {string}
 */
const eventsActions = {
	ADD_EVENT: 'add-event',
	REMOVE_EVENT: 'remove-event',
	SHOW_EVENTS: 'show-events'
};


export {events, eventsActions};
