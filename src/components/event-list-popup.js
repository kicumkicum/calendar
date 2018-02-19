import React from 'react';

import './event-list-popup.css';
import EventsList from './events-list/events-list';
import Event from '../structs/event';


/**
 * @param {{
 *      events: Array<Event>
 * }} props
 * @return {*}
 */
export default (props) => {
	return (
		<div className="eventList">
			<EventsList events={props.events} />
			<input className={'input'}/>
		</div>
	);
}
