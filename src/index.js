import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import {Calendar} from './services/calendar';
import reducer from './reducers';
import * as calendarUtils from './utils/calendar';

const calendar = new Calendar();
calendar.selectMonth(2018, calendarUtils.Months.FEBRUARY);

const store = createStore(reducer(calendar),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => console.log('subscribe', store.getState()));

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);
