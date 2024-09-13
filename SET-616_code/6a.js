function calculateFactorialNumber(number) {
	if (number < 0) {
		return 'number must be positive';
	} else if (number === 0) {
		return 1;
	} else {
		return number * calculateFactorialNumber(number - 1);
	}
}

console.log(calculateFactorialNumber(5));
