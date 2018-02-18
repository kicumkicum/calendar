/**
 * @param {Array<DayType>} currentMonth
 * @param {Array<DayType>} prevMonth
 * @param {Array<DayType>} nextMonth
 * @param {WeekDays} _monthStartDay
 * @return {Array<Array<DayType>>}
 */
export const createWeeksList = (currentMonth, prevMonth, nextMonth, _monthStartDay) => {
	const weeksData = [];
	const monthStartDay = WeekDaysMap.indexOf(_monthStartDay);
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
export const createDaysList = (year, month) => {
	const date = new Date(year, /** @type {number} */(month), 1);
	const firstMonthDay = date.getDay();

	const daysList = [];
	const a = (new Date(year, month + 1, 0));
	const daysCount = a.getDate();

	// TODO: Optimize it
	for (let i = 0; i < daysCount; i++) {
		const _date = new Date(year, /** @type {number} */(month), i + 1);
		const day = {
			date: _date,
			weekDay: WeekDaysMap[(firstMonthDay + i) % 7],
			events: [],
			isToday: () => isToday(day.date),
			toString: () => day.date.getDate(),
			isBlocked: undefined
		};
		daysList.push(day);
	}

	return daysList;
};


/**
 * @param {Date} date
 * @return {boolean}
 */
export const isToday = (date) => {
	const now = new Date;
	return isEqDay(now, date);
};


/**
 * @param {Date} dateA
 * @param {Date} dateB
 * @return {boolean}
 */
export const isEqDay = (dateA, dateB) => {
	if (isEqMonth(dateA, dateB)) {
		return dateA.getDate() === dateB.getDate();
	}

	return false;
};


/**
 * @param {Date} dateA
 * @param {Date} dateB
 * @return {boolean}
 */
export const isEqMonth = (dateA, dateB) => {
	if (isEqYear(dateA, dateB)) {
		return dateA.getMonth() === dateB.getMonth();
	}

	return false;
};


/**
 * @param {Date} dateA
 * @param {Date} dateB
 * @return {boolean}
 */
export const isEqYear = (dateA, dateB) => {
	return dateA.getFullYear() === dateB.getFullYear();
};


/**
 * @enum {string}
 */
export const WeekDays = {
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
export const WeekDaysMap = [
	WeekDays.SUNDAY,
	WeekDays.MONDAY,
	WeekDays.TUESDAY,
	WeekDays.WEDNESDAY,
	WeekDays.THURSDAY,
	WeekDays.FRIDAY,
	WeekDays.SATURDAY,
];

/**
 * @enum {number}
 */
export const Months = {
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
