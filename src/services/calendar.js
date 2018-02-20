import {WeekDays, Months, createDaysList} from '../utils/calendar';
import * as MonthStruct from '../structs/month';


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
		 * @type {Array<Day>}
		 * @private
		 */
		this._days = [];
	}

	/**
	 * @return {MonthStruct}
	 */
	getCurrentMonth() {
		return {
			year: this._year,
			month: this._month,
			days: this._days
		};
	}

	/**
	 * @param {number} year
	 * @param {Months} month
	 * @return {MonthStruct}
	 */
	getMonth(year, month) {
		return {
			year: year,
			month: month,
			days: createDaysList(year, month)
		};
	}

	/**
	 * @param {number} year
	 * @param {Months} month
	 * @return {MonthStruct}
	 */
	getPrevMonth(year, month) {
		const date = new Date(year, month, 1);
		date.setMonth(month - 1);
		return this.getMonth(date.getFullYear(), date.getMonth());
	}

	/**
	 * @param {number} year
	 * @param {Months} month
	 * @return {MonthStruct}
	 */
	getNextMonth(year, month) {
		const date = new Date(year, month, 1);
		date.setMonth(month + 1);
		return this.getMonth(date.getFullYear(), date.getMonth());
	}

	/**
	 * @param {number} year
	 * @param {Months} month
	 * @return {MonthStruct}
	 */
	selectMonth(year, month) {
		this._year = year;
		this._month = month;
		this._days = createDaysList(this._year, this._month);

		return {
			year: this._year,
			month: this._month,
			days: this._days
		};
	}

	/**
	 * @return {MonthStruct}
	 */
	selectNextMonth() {
		const date = new Date(this._year, /** @type {number} */(this._month), 1);
		date.setMonth(date.getMonth() + 1);

		return this.selectMonth(date.getFullYear(), /** @type {Months} */(date.getMonth()));
	}

	/**
	 * @return {MonthStruct}
	 */
	selectPrevMonth() {
		const date = new Date(this._year, /** @type {number} */(this._month), 1);
		date.setMonth(date.getMonth() - 1);

		return this.selectMonth(date.getFullYear(), /** @type {Months} */(date.getMonth()));
	}
}


export {Calendar};
