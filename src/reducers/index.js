import {combineReducers} from 'redux';

import {Calendar} from '../services/calendar';
import EventsService from '../services/events';
import today from './today';
import month from './month';
import events from './events';
import popups from './popups';


/**
 * @param {{
 *      calendar: Calendar,
 *      eventService: EventsService
 * }} deps
 * @return {Reducer<any>}
 */
export default (deps) => combineReducers({
	events: events(deps.eventService),
	month: month(deps.calendar),
	popups: popups(deps.eventService),
	today
});
