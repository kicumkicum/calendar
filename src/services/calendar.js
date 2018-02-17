import {WeekDays, Months, createDaysList} from '../utils/calendar';

const Calendar = class {
	constructor() {
		/**
		 * @type {Months}
		 * @private
		 */
		this._month = undefined;

		/**
		 * @type {number}
		 * @private
		 */
		this._year = undefined;

		/**
		 * @type {WeekDays}
		 * @private
		 */
		this._firstWeekDay = undefined;
	}

	/**
	 * @param {Months} month
	 * @param {number} year
	 */
	selectMonth(year, month) {
		this._year = year;
		this._month = month;
		const daysList = createDaysList(this._year, this._month);
		console.log(daysList);
	}

	/**
	 * @param {Date} date
	 */
	selectRange(date) {
		this._year = date.getFullYear();
		this._month = date.getMonth();
		const daysList = createDaysList()
	}


	/**
	 * @param {WeekDays} day
	 */
	selectFirstWeekDay(day) {
	}
}

export {Calendar};
