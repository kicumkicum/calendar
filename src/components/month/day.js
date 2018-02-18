import React from 'react';
import DayType from '../../structs/day';


/**
 * @param {DayType} props
 * @return {*}
 */
const Day = (props) => {
	const { isToday, isBlocked } = props.day;
	const classes = `${isBlocked ? 'nil' : ''} ${isToday() ? 'today' : ''}`;

	return (
		<td className={classes} >{props.day.toString()}</td>
	);
};


export { Day };
