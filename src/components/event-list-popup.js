import React, { Component } from 'react';

import './event-list-popup.css';
import EventsList from './events-list/events-list';
import Event from '../structs/event';
import {connect} from 'react-redux';
import {eventsActions} from '../reducers/events';
import {popupsActions} from '../reducers/popups';
import * as calendarUtils from '../utils/calendar';

const INPUT_PLACE_HOLDER_TEXT = 'Ctr + enter - add event';


/**
 * @param {{
 *      events: Array<Event>,
 *      maxCount: number
 * }} props
 * @return {*}
 */
const EventsListPopup = class extends Component {
	/**
	 * @override
	 */
	render() {
		return (
			<div className='eventList'
			>
				<EventsList
					events={this.props.events}
					maxCount={this.props.maxCount}
					visibleDescriptionEventId={this.props.visibleDescriptionEventId}
					canBeRemoved={true}
					onClickHandler={(event) => this.props.onClick(event, this.props)}
				/>
				<textarea 
					className={'input'}
					autoFocus
					placeholder={INPUT_PLACE_HOLDER_TEXT}
					onKeyDown={(e) => (this.props.onInputKeyDown(e, this.props.day))}
				/>
			</div>
		);
	}

	/**
	 * @override
	 */
	componentWillMount() {
		document.addEventListener('keydown', (...args) => this.onKeyDown(...args));
	}

	/**
	 * @override
	 */
	componentWillUnmount() {
		document.removeEventListener('keydown', (...args) => this.onKeyDown(...args));
	}

	/**
	 * @type {*} e
	 */
	onKeyDown(e) {
		return this.props.onKeyDown(e);
	}
};


export default connect(
	(state) => {
		const currentDay = state.popups.payload.day;
		const events = state.events.filter((event) => {
			return calendarUtils.isEqDay(currentDay, event.date)
		});

		const popupState = {
			...state.popups,

		};
		popupState.payload.events = events;

		return popupState.payload;
	},
	(dispatch) => ({
		onInputKeyDown: (e, day) => {
			if (e.keyCode === 13 && e.ctrlKey) {
				dispatch({type: eventsActions.ADD_EVENT, payload: {description: e.target.value, date: day}})
				e.target.value = '';
			}
		},
		onKeyDown: (e) => {
			if (e.keyCode === 27) {
				dispatch({type: popupsActions.CLOSE_POPUP, payload: null});
			}
		},
		onClick: (event, props) => {
			dispatch({type: popupsActions.SHOW_DESCRIPTION, payload: {
					...props,
					visibleDescriptionEventId: event.id

				}})
		}
	})
)(EventsListPopup);
