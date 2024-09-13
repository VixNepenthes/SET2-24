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
console.log('sum each number: ', sumEachNumber(-1));
console.log('sum each number: ', sumEachNumber(1001));
console.log('sum each number: ', sumEachNumber(323));
console.log('sum each number: ', sumEachNumber(456));
console.log('sum each number: ', sumEachNumber(789));
