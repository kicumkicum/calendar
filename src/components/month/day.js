import React from 'react';
import DayType from '../../structs/day';


/**
 * @param {DayType} props
 * @return {*}
 */
const Day = (props) => {
	const { isToday, isBlocked } = props;
	const classes = `${isBlocked ? 'nil' : ''} ${isToday() ? 'today' : ''}`;

	return (
		<td className={classes} >{props.toString()}</td>
	);
};


export { Day };
