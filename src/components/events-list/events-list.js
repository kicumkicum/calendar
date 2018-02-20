import React from 'react';

import './events-list.css';
import EventsListItem from './events-list-item';
import EventStruct from '../../structs/event';


/**
 * @param {{
 *      events: Array<EventStruct>,
 *      canBeRemoved: boolean,
 *      maxCount: number,
 *      visibleDescriptionEventId: string,
 *      onClickHandler: function(string)
 * }} props
 * @return {*}
 */
export default (props) => {
	return (
		<div className='eventsList'>
				{props.events.filter((event, i) => i < props.maxCount)
					.map((eventListItem, i) => (
						<EventsListItem
							event={eventListItem}
							key={String(i)}
							canBeRemoved={props.canBeRemoved}
							onClickHandler={props.onClickHandler}
							visibleDescription={eventListItem.id === props.visibleDescriptionEventId}
						/>)
					)
				}
		</div>
	);
};
