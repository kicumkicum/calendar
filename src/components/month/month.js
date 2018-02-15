import React from 'react';
import DayType from '../../structs/day';
import Week from './week';


/**
 * @param {{
 *      weeksList: Array<Array<DayType>>
 * }} props
 * @return {*}
 */
export default (props) => {
	return (
		<div id='cal-frame'>
			<table className='curr'>
				<tbody>
					{props.weeksList.map((days, i) => (<Week days={days} key={i}/>))}
				</tbody>
			</table>
		</div>
	);
}
