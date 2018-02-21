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
import EventService from './services/events';
import LocalStorage from './services/storage';
import TodayWatcher from './services/today-watcher';


const eventsStorage = new LocalStorage('events');
const eventService = new EventService(eventsStorage);

const calendar = new Calendar();

const now = new Date();
calendar.selectMonth(now.getFullYear(), now.getMonth());

const store = createStore(reducer({calendar, eventService}), composeWithDevTools(applyMiddleware(thunk)));
const todayWatcher = new TodayWatcher(store);

todayWatcher.startWatch(new Date(), 1000 * 60);
store.subscribe(() => console.log('subscribe', store.getState()));

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);
