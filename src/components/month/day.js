import React from 'react';
import {connect} from 'react-redux';

import './day.css';
import DayType from '../../structs/day';
import {popupsActions} from '../../reducers/popups';
import * as calendarUtils from '../../utils/calendar';
import Event from '../../structs/event';
import EventsList from '../events-list/events-list';


/**
 * @param {{
 *      day: DayType,
 *      events: Array<Event>
 * }} props
 * @return {*}
 */
const DayComponent = (props) => {
	const { isToday, isBlocked } = props.day;
	const classes = `day-cell ${isBlocked ? 'nil' : ''} ${isToday() ? 'today' : ''}`.trim();

	const myEvents = props.events.filter((event) => {
		return calendarUtils.isEqDay(event.date, props.day.date);
	});

	return (
		<td className={classes} onClick={() => !isBlocked && props.onDayClick(props.day.date)}>
			<div>
				<span className={'event'}>{createEventsMessage(myEvents)}</span>
				<span className={'date'} >{props.day.toString()}</span>
			</div>
			<EventsList events={myEvents} maxCount={3} />
		</td>
	);
};


/**
 * @param {Array<Event>} events
 * @return {string}
 */
const createEventsMessage = (events) => {
	let eventsMessage = '';
	if (events.length) {
		eventsMessage = `${events.length} event`;
		if (events.length > 1) {
			eventsMessage += 's';
		}
	}

	return eventsMessage;
};


const Day = connect(
	(state) => ({
		events: state.events
	}),
	(dispatch) => ({
		onDayClick: (date) => {
			dispatch({type: popupsActions.SHOW_EVENTS, payload: date})
		}
	})
)(DayComponent);


export { Day };
