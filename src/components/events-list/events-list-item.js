import React from 'react';
import {connect} from 'react-redux';

import './events-list-item.css';
import EventStruct from '../../structs/event';
import {eventsActions} from '../../reducers/events';


/**
 * @param {{
 *      event: EventStruct,
 *      canBeRemoved: boolean,
 *      visibleDescription: boolean,
 *      onClickHandler: function(EventStruct)
 * }} props
 * @return {*}
 */
const EventListItemComponent = (props) => {
	return (
		<div
			className={'eventListItem'}
			onClick={() => {
				props.onClickHandler && props.onClickHandler(props.event);
			}}
		>
			<div>
				<div className={'name'}>
					<span className={'text'}>{props.event.name}</span>
					{props.canBeRemoved ? <span
						onClick={() => props.onRemoveEventClick(props.event)}
						className={'remove'}
					>x</span> : ''}
				</div>
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


export default connect(
	(state) => ({}),
	(dispatch) => ({
		onRemoveEventClick: (event) => {
			dispatch({type: eventsActions.REMOVE_EVENT, payload: event.id})
		}
	})
)(EventListItemComponent)
