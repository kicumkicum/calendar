import React from 'react';

import './events-list.css';
import EventsListItem from './events-list-item';
import EventStruct from '../../structs/event';


/**
 * @param {{
 *      events: Array<EventStruct>,
 *      maxCount: number,
 *      visibleDescriptionEventId: string,
 *      onClickHandler: function(string)
 * }} props
 * @return {*}
 */
export default (props) => {
	// debugger
	return (
		<div className='eventsList'>
				{props.events.filter((event, i) => i < props.maxCount)
					.map((eventListItem, i) => (
						<EventsListItem
							event={eventListItem}
							key={String(i)}
							onClickHandler={props.onClickHandler}
							visibleDescription={eventListItem.id === props.visibleDescriptionEventId}
						/>)
					)
				}
		</div>
	);
};
