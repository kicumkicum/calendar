import React from 'react';


export default (props) => {
	return (
		<tr className={'eventListItem'}><td>{props.event.name}</td></tr>
	);
};
