import React from 'react';

import './events-list-item.css';

export default (props) => {
	return (
		<div className={'eventListItem'}>{props.event.name}</div>
	);
};
