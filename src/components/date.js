import React from 'react';


/**
 * @param {{
 *      date: Date,
 *      locale: string
 * }} props
 */
export default (props) => {
	const year = props.date.getFullYear();
	let month = props.date.toLocaleString(props.locale, { month: 'long' });
	month = month[0].toUpperCase() + month.substr(1);

	return (
		<span className='month-year' id='label'> {`${month} ${year}`} </span>
	);
};
