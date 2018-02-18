import React from 'react';
import {connect} from 'react-redux';

import './month.css';
import DayType from '../../structs/day';
import Week from './week';
import * as calendarUtils from '../../utils/calendar';


/**
 * @param {{
 *      weeksList: Array<Array<DayType>>
 * }} props
 * @return {*}
 */
const Month = (props) => {
	return (
		<div id='cal-frame'>
			<table className='curr'>
				<tbody>
					{props.weeksList.map((days, i) => (<Week days={days} key={i}/>))}
				</tbody>
			</table>
		</div>
	);
};

export default connect(
	(state) => {
		const currentMonth = state.month.selectedMonth.days;
		const prevMonth = state.month.prevMonth.days;
		const nextMonth = state.month.nextMonth.days;
		const weeksList = calendarUtils.createWeeksList(currentMonth, prevMonth, nextMonth, currentMonth[0].weekDay);

		return {
			weeksList
		}
	},
	(dispatch) => ({})
)(Month);
