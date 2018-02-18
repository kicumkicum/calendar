import {combineReducers} from 'redux';
import {Calendar} from '../services/calendar';

import {today} from './today';
import {month} from './month';


/**
 * @param {Calendar} calendar
 * @return {Reducer<any>}
 */
const reducers = (calendar) => combineReducers({
	month: month(calendar),
	today
});

export default reducers;
