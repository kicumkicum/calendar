import React, { Component } from 'react';

import './App.css';
import DateComponent from './components/date';
import {Arrow, ArrowType} from './components/arrow';
import WeekDays from './components/week/week';
import Month from './components/month/month';

class App extends Component {
	render() {
		const locale = navigator.language;
		return (
			<div id='cal'>
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
}


export default App;
