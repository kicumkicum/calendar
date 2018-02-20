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
			<div>
				<div className={'name'}>
					<span className={'text'}>{props.event.name}</span>
				</div>
				<div className={'remove'}></div>
			</div>
			<div
				style={{display: props.visibleDescription ? 'block' : 'none'}}
				className={'description'}
			>
				{props.event.description}
			</div>
		</div>
	);
};
