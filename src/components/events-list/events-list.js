import React from 'react';

import './events-list.css';
import EventsListItem from './events-list-item';


export default (props) => {
	return (
		<div className='eventsList'>
				{props.events.filter((event, i) => i < props.maxCount).map((eventListItem, i) => (<EventsListItem event={eventListItem} key={String(i)} />))}
		</div>
	);
};
