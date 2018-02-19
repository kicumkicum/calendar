import Event from '../structs/event';
import IStorage from './i-storage';
import {isEqDay} from '../utils/calendar';


export default class EventsService {
	/**
	 * @param {IStorage} storage
	 */
	constructor(storage) {
		/**
		 * @type {IStorage}
		 * @private
		 */
		this._storage = storage;
	}

	/**
	 * @param {Date} date
	 * @return {Array<Event>}
	 */
	getEventByDate(date) {
		return this.getAllEvents().filter((event) => {
			return isEqDay(event.date, date);
		});
	}

	/**
	 * @param {Date} from
	 * @param {Date} to
	 */
	getEventsByPeriod(from, to) {}

	/**
	 * @return {Array<Event>}
	 */
	getAllEvents() {
		return this._storage.getAll()
			.map((item) => {
				const {name, description, id, date} = item.value;
				return new Event(id, name, description, date);
			}, this);
	}

	/**
	 * @param {string} name
	 * @param {string} description
	 * @param {Date} date
	 * @return {Event}
	 */
	addEvent(name, description, date) {
		const id = date.toISOString() + Math.random().toString().substr(2, 10);
		const event = new Event(id, name, description, date);
		this._storage.setItem(id, event);

		return event;
	}

	/**
	 * @param {string} id
	 */
	removeEvent(id) {
		this._storage.removeItem(id);
	}
}
