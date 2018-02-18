import React from 'react';
import {connect} from 'react-redux';

import './day.css';
import DayType from '../../structs/day';


/**
 * @param {{
 *      day: DayType
 * }} props
 * @return {*}
 */
const DayComponent = (props) => {
	const { isToday, isBlocked, events } = props.day;
	const classes = `${isBlocked ? 'nil' : ''} ${isToday() ? 'today' : ''}`;
	let eventsMessage = '';
	if (events.length) {
		eventsMessage = events.left + ' events';
	}

	return (
		<td className={classes} onClick={() => props.onDayClick(props.day)}>
			<div>
				<span className={'event'}>{eventsMessage}</span>
				<span className={'date'} >{props.day.toString()}</span>
			</div>
		</td>
	);
};

const Day = connect(
	(state) => ({}),
	(dispatch) => ({
		onDayClick: () => {
			dispatch()
		}
	})
)(DayComponent);

export { Day };
