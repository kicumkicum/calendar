import {combineReducers} from 'redux';

import {today} from './today';
import {month} from './month';

export default combineReducers({
	month,
	today
});
