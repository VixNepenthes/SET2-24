function sumEachNumber(number) {
	if (number < 0 || number > 1000) {
		return 'Need number < 1000';
	}
	let sum = 0;
	while (number > 0) {
		let temporary = number % 10;
		sum = sum + temporary;
		number = Math.floor(number / 10);
	}
	return sum;
}
console.log('From 1 to N: ', sumEachNumber(-1));
console.log('From 1 to N: ', sumEachNumber(1001));
console.log('From 1 to N: ', sumEachNumber(323));
console.log('From 1 to N: ', sumEachNumber(456));
console.log('From 1 to N: ', sumEachNumber(789));
