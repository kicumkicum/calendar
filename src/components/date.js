import React from 'react';
import {connect} from 'react-redux';

import './date.css';


/**
 * @param {{
 *      date: Date,
 *      locale: string
 * }} props
 */
const DateComponent = (props) => {
	const year = props.date.getFullYear();
	let month = props.date.toLocaleString(props.locale, { month: 'long' });
	month = month[0].toUpperCase() + month.substr(1);

	return (
		<span className='month-year' id='label'> {`${month} ${year}`} </span>
	);
};


/**
 * @param {Object} state
 * @return {Date}
 */
const changeDate = (state) => {
	const monthObject = state.month.selectedMonth;
	const year = monthObject.year;
	const month = monthObject.month;

	return new Date(year, month, 1);
};


export default connect(
	(state) => ({
		date: changeDate(state)
	}),
	(dispatch) => ({})
)(DateComponent);
