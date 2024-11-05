function findSecondLargestDigit(number) {
	if (number <= 100000) {
		return 'number must bigger than 100000';
	}
	let copiedNumber = number;
	let temporary = number % 10;
	number = Math.floor(number / 10);
	let max1st = temporary;
	let max2nd = 0;
	while (number > 0) {
		temporary = number % 10;
		if (temporary >= max1st) {
			max1st = temporary;
		}
		number = Math.floor(number / 10);
	}
	while (copiedNumber > 0) {
		temporary = copiedNumber % 10;
		if (temporary < max1st) {
			if (temporary >= max2nd) {
				max2nd = temporary;
			}
		}
		copiedNumber = Math.floor(copiedNumber / 10);
	}
	return max2nd;
}

console.log('Find max: ', findSecondLargestDigit(345));
console.log('Find max: ', findSecondLargestDigit(3457844));
console.log('Find max: ', findSecondLargestDigit(3459421));
console.log('Find max: ', findSecondLargestDigit(3459123573421));
console.log('Find max: ', findSecondLargestDigit(3459129573481));
