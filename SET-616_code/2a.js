function findMax(number) {
	if (number <= 100000) {
		return 'number must bigger than 100000';
	}
	let temporary = number % 10;
	number = Math.floor(number / 10);
	let max = temporary;
	while (number > 0) {
		temporary = number % 10;
		if (temporary >= max) {
			max = temporary;
		}
		number = Math.floor(number / 10);
	}
	return max;
}

console.log('Find max: ', findMax(345));
console.log('Find max: ', findMax(3457844));
console.log('Find max: ', findMax(3459421));
console.log('Find max: ', findMax(3459123573421));
console.log('Find max: ', findMax(3459129573481));
