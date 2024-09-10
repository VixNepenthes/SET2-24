function sumFrom1ToNumber(number) {
	if (number < 0 || number > 1000) {
		return 'Need number < 1000';
	}
	let sum = 0;
	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			sum = sum + i;
		}
	}
	return sum;
}

console.log('From 1 to N: ', sumFrom1ToNumber(-1));
console.log('From 1 to N: ', sumFrom1ToNumber(1001));
console.log('From 1 to N: ', sumFrom1ToNumber(6));
console.log('From 1 to N: ', sumFrom1ToNumber(4));
console.log('From 1 to N: ', sumFrom1ToNumber(3));
