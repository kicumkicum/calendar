import DayType from './day';


/**
 * @record
 */
export default class Month {
	/**
	 * @type {number}
	 */
	year;

	/**
	 * @type {Months}
	 */
	month;

	/**
	 * @type {Array<DayType>}
	 */
	days;
}
