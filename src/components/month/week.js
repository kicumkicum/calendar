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
			{console.log('component week', props)}
			{props.days.map((day, i) => (<Day {...day} key={i}/>))}
		</tr>
	);
}
