import IStorage from './i-storage';


/**
 * @implements {IStorage}
 */
export default class LocalStorage {
	/**
	 * @param {string} prefix
	 */
	constructor(prefix) {
		/**
		 * @type {Storage}
		 * @private
		 */
		this._storage = window.localStorage;

		/**
		 * @type {string}
		 * @private
		 */
		this._prefix = prefix;
	}

	/**
	 * @param {string} key
	 * @param {*} value
	 */
	setItem(key, value) {
		const data = this._getData();
		data[key] = value;

		this._setData(data);
	}

	/**
	 * @param {string} key
	 * @return {*}
	 */
	getItem(key) {
		const data = this._getData();
		return data[key];
	}

	/**
	 * @param {string} key
	 */
	removeItem(key) {
		const data = this.getAll()
			.filter((item) => item.key !== key);

		const result = {};
		data.forEach((item) => result[item.key] = item.value);

		this._setData(result);
	}

	/**
	 * @return {Array<{key: string, value: *}>}
	 */
	getAll() {
		const data = this._getData();
		return Object
			.keys(data)
			.map((key) => {
				return {
					key: key,
					value: data[key]
				};
			})
			.filter((data) => typeof data !== 'undefined');
	}

	/**
	 */
	clear() {
		this._setData('');
	}

	/**
	 * @return {Object}
	 * @private
	 */
	_getData() {
		try {
			const rawData = this._storage.getItem(this._prefix);
			return JSON.parse(rawData) || {};
		} catch (e) {
			alert(e);
		}
	}

	_setData(data) {
		try {
			this._storage.setItem(this._prefix, JSON.stringify(data));
		} catch (e) {
			alert(e);
		}
	}
}
