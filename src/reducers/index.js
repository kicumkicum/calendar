import {combineReducers} from 'redux';

import {Calendar} from '../services/calendar';
import EventsService from '../services/events';
import {today} from './today';
import {month} from './month';
import {events} from './events';


/**
 * @param {{
 *      calendar: Calendar,
 *      eventService: EventsService
 * }} deps
 * @return {Reducer<any>}
 */
const reducers = (deps) => combineReducers({
	events: events(deps.eventService),
	month: month(deps.calendar),
	today
});

export default reducers;
