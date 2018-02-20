import React, { Component } from 'react';

import './event-list-popup.css';
import EventsList from './events-list/events-list';
import Event from '../structs/event';
import {connect} from 'react-redux';
import {eventsActions} from '../reducers/events';
import {popupsActions} from '../reducers/popups';
import * as calendarUtils from '../utils/calendar';


/**
 * @param {{
 *      events: Array<Event>
 * }} props
 * @return {*}
 */
const EventsListPopup = class extends Component {
	/**
	 * @override
	 */
	render() {
		return (
			<div className='eventList'>
				<EventsList events={this.props.events} maxCount={this.props.maxCount} />
				<input onKeyDown={(e) => (console.log(this.props), this.props.onInputKeyDown(e, this.props.day))} className={'input'}/>
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

		return {events};
	},
	(dispatch) => ({
		onInputKeyDown: (e, day) => {
			if (e.keyCode === 13) {
				dispatch({type: eventsActions.ADD_EVENT, payload: {description: e.target.value, date: day}})
				e.target.value = '';
			}
		},
		onKeyDown: (e) => {
			if (e.keyCode === 27) {
				dispatch({type: popupsActions.CLOSE_POPUP, payload: null});
			}
		}
	})
)(EventsListPopup);
