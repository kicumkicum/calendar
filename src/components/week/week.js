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

	const days = [];
	for (let i = 0; i < 7; i++) {
		days.push((<WeekDay name={new Date().setDay} />));
	}

	const arr = weekDays.map((weekDay) => {
		return (<WeekDay name={weekDay} />);
	});

	return (
		<table id="days">
			<tbody>
			<tr>
				{arr}
			</tr>
			</tbody>
		</table>
	);
};
