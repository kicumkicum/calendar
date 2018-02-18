import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import {Calendar} from './services/calendar';
import reducer from './reducers';
import * as calendarUtils from './utils/calendar';
import EventService from './services/events';

const calendar = new Calendar();
const eventService = new EventService(window.localStorage);

calendar.selectMonth(2018, calendarUtils.Months.FEBRUARY);

const store = createStore(reducer({calendar, eventService}), composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => console.log('subscribe', store.getState()));

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);
