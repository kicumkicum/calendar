import React from 'react';
import EventsListItem from './events-list-item';


export default (props) => {
	return (
		<table className='eventsList'>
			<tbody>
				{props.events.map((eventListItem, i) => (<EventsListItem event={eventListItem} key={String(i)} />))}
			</tbody>
		</table>
	);
};
