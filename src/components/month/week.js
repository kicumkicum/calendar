import React from 'react';
import {Day} from './day';


/**
 * @param {{
 *      days: Array<Day>
 * }} props
 * @return {*}
 */
export default (props) => {
	return (
		<tr>
			{props.days.map((day, i) => (<Day day={day} key={i}/>))}
		</tr>
	);
}
