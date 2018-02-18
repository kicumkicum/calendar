import React from 'react';
import {connect} from 'react-redux';

import './day.css';
import DayType from '../../structs/day';
import {eventsActions} from '../../reducers/events';
import * as calendarUtils from '../../utils/calendar';
import Event from '../../structs/event';


/**
 * @param {{
 *      day: DayType,
 *      events: Array<Event>
 * }} props
 * @return {*}
 */
const DayComponent = (props) => {
	const { isToday, isBlocked } = props.day;
	const classes = `${isBlocked ? 'nil' : ''} ${isToday() ? 'today' : ''}`;

	const myEvents = props.events.filter((event) => {
		return calendarUtils.isEqDay(event.date, props.day.date);
	});
//		{/*<td className={classes} onClick={() => props.onDayClick(props.day.events)}>*/}

	return (
		<td className={classes} onClick={() => !isBlocked && props.onDayClick(props.day.date)}>
			<div>
				<span className={'event'}>{createEventsMessage(myEvents)}</span>
				<span className={'date'} >{props.day.toString()}</span>
			</div>
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
			// dispatch({type: eventsActions.SHOW_EVENTS, payload: events})
			dispatch({type: eventsActions.ADD_EVENT, payload: {description: 'abscuaoeus aueotuaoeuoaeu', date}})
		}
	})
)(DayComponent);


export { Day };
