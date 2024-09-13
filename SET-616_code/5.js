function bubbleSort(arrayOfNumbers) {
	for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
		for (let j = 0; j < arrayOfNumbers.length - i - 1; j++) {
			if (arrayOfNumbers[j] > arrayOfNumbers[j + 1]) {
				const temporaryNumber = arrayOfNumbers[j];
				arrayOfNumbers[j] = arrayOfNumbers[j + 1];
				arrayOfNumbers[j + 1] = temporaryNumber;
			}
		}
	}
	return arrayOfNumbers;
}

console.log(bubbleSort([1, 4, 2, 3, 4, 6, 1, 3, 9, 8, 7, 5, 0, 9, 3]).toString());
