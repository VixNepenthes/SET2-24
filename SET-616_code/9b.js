function bubbleSort(array, isIncreasing) {
	if (isIncreasing) {
		for (let i = 0; i < array.length - 1; i++) {
			for (let j = 0; j < array.length - i - 1; j++) {
				if (array[j] > array[j + 1]) {
					const temporaryNumber = array[j];
					array[j] = array[j + 1];
					array[j + 1] = temporaryNumber;
				}
			}
		}
	} else {
		for (let i = 0; i < array.length - 1; i++) {
			for (let j = 0; j < array.length - i - 1; j++) {
				if (array[j] < array[j + 1]) {
					const temporaryNumber = array[j];
					array[j] = array[j + 1];
					array[j + 1] = temporaryNumber;
				}
			}
		}
	}
	return array;
}

function sortArrayNumbersOrString(arrayNumbersOrString, isIncreasing = true) {
	if (typeof arrayNumbersOrString === 'string') {
		let arrayOfString = [];
		for (let character of arrayNumbersOrString) {
			arrayOfString.push(character);
		}
		const sortedArrayString = bubbleSort(arrayOfString, isIncreasing);
		let sortedString = '';
		for (let i = 0; i < sortedArrayString.length; i++) {
			sortedString += sortedArrayString[i];
		}
		return sortedString;
	} else {
		const sortedArrayNumbers = bubbleSort(arrayNumbersOrString, isIncreasing);
		return sortedArrayNumbers;
	}
}

console.log(sortArrayNumbersOrString([4, 5, 2, 3, 5, 21, 42, 42, 11, 1]));
console.log(sortArrayNumbersOrString([4, 5, 2, 3, 5, 21, 42, 42, 11, 1], true));
console.log(sortArrayNumbersOrString([4, 5, 2, 3, 5, 21, 42, 42, 11, 1], false));
console.log(sortArrayNumbersOrString('fehfsefhaddviosdcnvb'));
console.log(sortArrayNumbersOrString('fehfsefhaddviosdcnvb', true));
console.log(sortArrayNumbersOrString('fehfsefhaddviosdcnvb', false));
