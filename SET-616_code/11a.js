function findMaxIndex(arrayNumbers) {
	let maximumNumber = 0;
	let maximumIndex = 0;
	for (let i = 0; i < arrayNumbers.length; i++) {
		if (arrayNumbers[i] >= maximumNumber) {
			maximumNumber = arrayNumbers[i];
			maximumIndex = i + 1;
		}
	}
	return maximumIndex;
}

console.log(`Maximum index is: ${findMaxIndex([1, 3, 4, 2, 9, 5, 3, 7, 8])}`);
