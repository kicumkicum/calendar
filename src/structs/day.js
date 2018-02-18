/**
 * @record
 */
export default class DayType {
	/**
	 * @type {Date}
	 */
	date;
	/**
	 * @type {WeekDays}
	 */
	weekDay;
	/**
	 * @type {Array<>}
	 */
	events;
	/**
	 * @type {boolean}
	 */
	isToday;
	/**
	 * @type {(boolean|undefined)}
	 */
	isBlocked;
}
