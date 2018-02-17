import React, { Component } from 'react';
import './App.css';

import DateComponent from './components/date';
import {Arrow, ArrowType} from './components/arrow';
import WeekDays from './components/week/week';
import Month from './components/month/month';
import {Calendar} from './services/calendar';
import * as calendarUtils from './utils/calendar';

class App extends Component {
	constructor() {
		super();

		/**
		 * @type {Calendar}
		 * @private
		 */
		this._calendar = new Calendar();
		this._calendar.selectMonth(2018, calendarUtils.Months.FEBRUARY);
	}
	render() {
		const locale = navigator.language;
		return (
			<div id='cal'>
				<div className='header'>
					<Arrow type={ ArrowType.PREV }/>
					<DateComponent date={ new Date() } locale={ locale }/>
					<Arrow type={ ArrowType.NEXT }/>
				</div>
				<WeekDays locale={ locale }/>
				<Month weeksList={calendarUtils.createWeeksList(createStub(), createStub(), createStub(), 2)}/>
			</div>
		);
	}
}

function createStub() {
	const days = [];
	for (let i = 0; i < 31; i++) {
		days.push({
			day: i + 1,
			events: [],
			isToday: i === 0,
			isBlocked: i === 31
		});
	}

	return days;
}

export default App;
