import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';
import DateComponent from './components/date';
import {Arrow, ArrowType} from './components/arrow';
import WeekDays from './components/week/week';
import Month from './components/month/month';
import EventListPopup from './components/event-list-popup';
import {popupsTypes} from './reducers/popups';
import Event from './structs/event';


class App extends Component {
	render() {
		const locale = navigator.language;
		const popup = this.props.popups;
		return (
			<div id='cal'>
				{popup && popup.type === popupsTypes.EVENTS_LIST && this._showEventsListPopup(popup.payload)}
				<div className='header'>
					<Arrow type={ ArrowType.PREV }/>
					<DateComponent date={ new Date() } locale={ locale }/>
					<Arrow type={ ArrowType.NEXT }/>
				</div>
				<WeekDays locale={ locale }/>
				<Month/>
			</div>
		);
	}

	/**
	 * @param {{
	 *      events: Array<Event>
	 * }} payload
	 * @return {*}
	 * @private
	 */
	_showEventsListPopup(payload) {
		return (
			<div className='popup'>
				<EventListPopup events={payload.events} day={payload.day} maxCount={Infinity}/>
			</div>
		);
	}
}


export default connect(
	(state) => (state),
	(dispatch) => ({})
)(App);
