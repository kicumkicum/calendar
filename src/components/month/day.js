import React from 'react';
import DayType from '../../structs/day';


/**
 * @param {{
 *      day: DayType
 * }} props
 * @return {*}
 */
const Day = (props) => {
	const { date, events, isToday, isBlocked } = props;
	const classes = `${isBlocked ? 'nil' : ''} ${isToday ? 'today' : ''}`;

	return (
		<td className={classes} >{date}</td>
	);
};


export { Day };
