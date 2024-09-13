function findMin(number) {
	if (number <= 100000) {
		return 'number must bigger than 100000';
	}
	let temporary = number % 10;
	number = Math.floor(number / 10);
	let min = temporary;
	while (number > 0) {
		temporary = number % 10;
		if (min >= temporary) {
			min = temporary;
		}
		number = Math.floor(number / 10);
	}
	return min;
}

console.log('Find min: ', findMin(345));
console.log('Find min: ', findMin(3457844));
console.log('Find min: ', findMin(3459421));
console.log('Find min: ', findMin(3459123573421));
console.log('Find min: ', findMin(3459129573481));
