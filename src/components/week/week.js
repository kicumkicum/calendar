import React from 'react';
import WeekDay from './week-day';


const getWeekDays = (locale) => {
	const baseDate = new Date(Date.UTC(2017, 0, 2)); // just a Monday
	const weekDays = [];

	for (let i = 0; i < 7; i++) {
		weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'short' }));
		baseDate.setDate(baseDate.getDate() + 1);
	}

	return weekDays;
};

/**
 * @param {{
 *      locale: string
 * }} props
 */
export default (props) => {
	const weekDays = getWeekDays(props.locale);
	return (
		<table id="days">
			<tbody>
			<tr>{weekDays.map((weekDay) => (<WeekDay name={weekDay} />))}</tr>
			</tbody>
		</table>
	);
};
