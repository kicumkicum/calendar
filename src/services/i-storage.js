/**
 * @interface
 */
export default class IStorage {
	/**
	 * @param {string} key
	 * @param {*} value
	 */
	setItem(key, value) {}

	/**
	 * @param {string} key
	 * @return {*}
	 */
	getItem(key) {}

	/**
	 * @return {Array<*>}
	 */
	getAll() {}

	/**
	 * @param {string} key
	 */
	removeItem(key) {}

	/**
	 */
	clear() {}
}
