import Event from '../structs/event';
import IStorage from './i-storage';


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
	 * @return {Array<Event>}
	 */
	getEventByDate() {}

	/**
	 * @param {Date} from
	 * @param {Date} to
	 */
	getEventsByPeriod(from, to) {}

	/**
	 * @return {Array<Event>}
	 */
	getAllEvents() {
		return [
			new Event(1, 'event1', 'description event 1', new Date()),
			new Event(1, 'event1', 'description event 1', new Date()),
			new Event(1, 'event1', 'description event 1', new Date()),
			new Event(1, 'event1', 'description event 1', new Date()),
			new Event(1, 'event1', 'description event 1', new Date())
		];
	}

	/**
	 * @param {string} name
	 * @param {string} description
	 * @param {Date} date
	 * @return {Event}
	 */
	addEvent(name, description, date) {
		const id = date.toISOString();
		const event = new Event(id, name, description, date);
		this._storage.setItem(id, JSON.stringify(event));

		return event;
	}

	/**
	 * @param {string} id
	 */
	removeEvent(id) {
		this._storage.removeItem(id);
	}
}
