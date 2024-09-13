function sumFrom1ToNumber(number) {
	if (number < 0 || number > 1000) {
		return 'Need number < 1000';
	} else {
		let sum = 0;
		for (let i = 1; i <= number; i++) {
			sum = sum + i;
		}
		return sum;
	}
}
console.log('From 1 to N: ', sumFrom1ToNumber(-1));
console.log('From 1 to N: ', sumFrom1ToNumber(1001));
console.log('From 1 to N: ', sumFrom1ToNumber(5));
console.log('From 1 to N: ', sumFrom1ToNumber(4));
console.log('From 1 to N: ', sumFrom1ToNumber(3));
