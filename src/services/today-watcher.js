import * as calendarUtils from '../utils/calendar';
import {todayActions} from '../reducers/today';


export default class TodayWatcher {
	/**
	 * @param {Store} store
	 */
	constructor(store) {
		/**
		 * @type {?number}
		 * @private
		 */
		this._timerId = null;

		/**
		 * @type {?number}
		 * @private
		 */
		this._checkInterval = null;

		/**
		 * @type {?Date}
		 * @private
		 */
		this._today = null;

		/**
		 * @type {Store}
		 * @private
		 */
		this._store = store;
	}

	/**
	 * @param {Date} today
	 * @param {number} checkInterval
	 */
	startWatch(today, checkInterval) {
		this.stopWatch();

		this._today = today;
		this._checkInterval = checkInterval;

		this._timerId = setTimeout(() => this._checkToday(), this._checkInterval);
	}

	/**
	 */
	stopWatch() {
		if (this._timerId !== null) {
			clearTimeout(this._timerId);
			this._timerId = null;
			this._today = null;
		}
	}

	/**
	 * @private
	 */
	_checkToday() {
		const now = new Date(this._today);
		now.setDate(now.getDate() + 1);
		if (!calendarUtils.isEqDay(this._today, now)) {
			this._today = now;
			this._store.dispatch({type: todayActions.TODAY_CHANGE, payload: now});
		}

		this.startWatch(this._today, this._checkInterval);
	}
}
