export default class Event {
	/**
	 * @param {string} id
	 * @param {string} name
	 * @param {string} description
	 * @param {Date|string} date
	 */
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
		this.date = new Date(date);
	}
}
