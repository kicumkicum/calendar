import React from 'react';

import './events-list-item.css';
import EventStruct from '../../structs/event';


/**
 * @param {{
 *      event: EventStruct,
 *      visibleDescription: boolean,
 *      onClickHandler: function(EventStruct)
 * }} props
 * @return {*}
 */
export default (props) => {
	return (
		<div
			className={'eventListItem'}
			onClick={
				() => {
					props.onClickHandler && props.onClickHandler(props.event);
				}
			}
		>
			<div className={'name'}>{props.event.name}</div>
			<div
				style={{display: props.visibleDescription ? 'block' : 'none'}}
				className={'description'}
			>
				{props.event.description}
			</div>
		</div>
	);
};
