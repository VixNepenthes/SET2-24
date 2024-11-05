function findSmallestNumberOf2DArrayNumbers(arrayNumbers) {
	let minimumNumber = arrayNumbers[0][0];
	for (let i = 0; i < arrayNumbers.length; i++) {
		for (let j = 0; j < arrayNumbers[i].length; j++) {
			if (arrayNumbers[i][j] < minimumNumber) {
				minimumNumber = arrayNumbers[i][j];
			}
		}
	}
	return minimumNumber;
}

console.log(
	findSmallestNumberOf2DArrayNumbers([
		[1, 2, 3],
		[14, 25, 31],
		[90, 30, 12],
		[65, 101, 23],
	])
);
