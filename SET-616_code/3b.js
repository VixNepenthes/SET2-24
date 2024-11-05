function checkIsPerfectNumber(number) {
	if (typeof number !== 'number') {
		return 'Please input number';
	}
	if (number <= 0) {
		return false;
	}
	let sumOfDivisors = 0;
	for (let i = 1; i < number; i++) {
		if (number % i === 0) {
			sumOfDivisors = sumOfDivisors + i;
		}
	}
	return sumOfDivisors === number;
}

console.log(checkIsPerfectNumber(28));
