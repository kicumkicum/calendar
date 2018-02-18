export default class Event {
	constructor(id, name, description, date) {
		/**
		 * @type {string}
		 */
		this.id = id;

		/**
		 * @type {string}
		 */
		this.name = name;
		/**
		 * @type {string}
		 */
		this.description = description;
		/**
		 * @type {Date}
		 */
		this.date = date;
	}
}
