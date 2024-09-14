function findMaxOf2DArrayNumbers(arrayNumbers) {
	let maximumNumber = 0;
	for (let i = 0; i < arrayNumbers.length; i++) {
		for (let j = 0; j < arrayNumbers[i].length; j++) {
			if (arrayNumbers[i][j] > maximumNumber) {
				maximumNumber = arrayNumbers[i][j];
			}
		}
	}
	return maximumNumber;
}

console.log(
	findMaxOf2DArrayNumbers([
		[1, 2, 3],
		[14, 25, 31],
		[90, 30, 12],
		[65, 101, 23],
	])
);
