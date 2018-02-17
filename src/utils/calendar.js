/**
 * @param {Array<DayType>} currentMonth
 * @param {Array<DayType>} prevMonth
 * @param {Array<DayType>} nextMonth
 * @param {number} monthStartDay
 * @return {Array<Array<DayType>>}
 */
const createWeeksList = (currentMonth, prevMonth, nextMonth, monthStartDay) => {
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
};

/**
 * @param {number} year
 * @param {Months}  month
 * @return {Array<DayType>}
 */
const createDaysList = (year, month) => {
	const date = new Date(year, /** @type {number} */(month), 1);
	const firstMonthDay = date.getDay();

	const daysList = [];
	const a = (new Date(year, month + 1, 0));
	const daysCount = a.getDate();

	// TODO: Optimize it
	const _date = new Date(year, /** @type {number} */(month), 1);
	for (let i = 0; i < daysCount; i++) {
		daysList.push({
			date: i + 1,
			weekDay: WeekDaysMap[(firstMonthDay - 1 + i) % 7],
			events: [],
			isToday: isToday(_date),
			isBlocked: undefined
		});
	}

	return daysList;
};


/**
 * @param {Date} date
 * @return {boolean}
 */
const isToday = (date) => {
	const now = new Date;
	return date.getFullYear() === now.getFullYear() &&
		date.getMonth() === now.getMonth() &&
		date.getDay() === now.getDay();
};

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
 * @type {Array<WeekDays>}
 */
const WeekDaysMap = [
	WeekDays.MONDAY,
	WeekDays.TUESDAY,
	WeekDays.WEDNESDAY,
	WeekDays.THURSDAY,
	WeekDays.FRIDAY,
	WeekDays.SATURDAY,
	WeekDays.SUNDAY
];

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


export {createWeeksList, createDaysList, WeekDays, Months};