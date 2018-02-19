import EventsService from '../services/events';

const initialState = [];


/**
 * @param {EventsService} eventsService
 * @return {function(*=, *)}
 */
export default (eventsService) => {
	return (state = initialState, action) => {
		if (action.type === popupsActions.SHOW_EVENTS) {
			const events = eventsService.getEventByDate(action.payload);
			return {
				type: popupsTypes.EVENTS_LIST,
				payload: {
					events: events
				}
			};
		} else if (action.type === popupsActions.CLOSE_POPUP) {
			return state.slice(0, state.length - 1);
		}

		return state;
	};
};

export const popupsTypes = {
	EVENTS_LIST: 'events-list'
};

export const popupsActions = {
	CLOSE_POPUP: 'close-popup',
	SHOW_EVENTS: 'show-events'
};
