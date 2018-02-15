import DayType from '../structs/day';

const Calendar = class {
	/**
	 * @param {Array<DayType>} currentMonth
	 * @param {Array<DayType>} prevMonth
	 * @param {Array<DayType>} nextMonth
	 * @param {number} monthStartDay
	 * @return {Array<Array<DayType>>}
	 */
	createWeeksList(currentMonth, prevMonth, nextMonth, monthStartDay) {
		const weeksData = [];
		let j = 0;

		currentMonth.forEach((day, i) => {
			j = Math.floor((i + monthStartDay) / 7);

			weeksData[j] = weeksData[j] || [];
			weeksData[j].push(day);
		});

		const prevItemsLength = 7 - weeksData[0].length;
		const prevItems = prevMonth.slice(prevMonth.length - prevItemsLength)
			.map((day) => {
				return {...day, isBlocked: true};
			});
		weeksData[0] = prevItems.concat(weeksData[0]);

		const nextItemsLength = 7 - weeksData[j].length;
		const nextItems = nextMonth.slice(0, nextItemsLength)
			.map((day) => {
				return {...day, isBlocked: true};
			});
		weeksData[j] = weeksData[j].concat(nextItems);

		return weeksData;
	}
}


/**
 * @enum {string}
 */
const WeekDays = {
	MONDAY: 'monday',
	TUESDAY: 'tuesday',
	WEDNESDAY: 'wednesday',
	THURSDAY: 'thursday',
	FRIDAY: 'friday',
	SATURDAY: 'saturday',
	SUNDAY: 'sunday'
};


/**
 * @enum {number}
 */
const Months = {
	JANUARY: 0,
	FEBRUARY: 1,
	MARCH: 2,
	APRIL: 3,
	MAY: 4,
	JUNE: 5,
	JULY: 6,
	AUGUST: 7,
	SEPTEMBER: 8,
	OCTOBER: 9,
	NOVEMBER: 10,
	DECEMBER: 11
};

export {Calendar, WeekDays, Months};
