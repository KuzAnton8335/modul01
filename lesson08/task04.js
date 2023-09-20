const getLeapYears = (n, m) => {
	const result = [],
		isLeapYear = function (y) {
			return ((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0);
		};
	for (let year = n; year <= m; year++) {
		if (isLeapYear(year)) result.push(year);
	}

	return result;
}

console.log(getLeapYears(2000, 2026)); // [2000, 2004, 2008, 2012, 2016,2020,2024]
