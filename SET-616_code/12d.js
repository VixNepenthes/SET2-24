function checkIsPrimeNumber(number) {
	if (typeof number !== 'number') {
		return 'Please input number';
	}
	if (number <= 1) {
		return false;
	} else {
		for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
			if (number % i === 0) {
				return false;
			}
		}
		return true;
	}
}

function findPrimeNumberIn2DArrayNumber(arrayNumbers) {
	let arrayOfPrimeNumbers = [];
	for (let i = 0; i < arrayNumbers.length; i++) {
		for (let j = 0; j < arrayNumbers[i].length; j++) {
			if (checkIsPrimeNumber(arrayNumbers[i][j])) {
				arrayOfPrimeNumbers.push(arrayNumbers[i][j]);
			}
		}
	}
	return `Here is prime numbers in 2D array: ${arrayOfPrimeNumbers.toString()}`;
}

let arrayNumber = [
	[2, 3, 4, 5],
	[6, 7, 8, 9],
	[10, 11, 12, 13],
];

console.log(findPrimeNumberIn2DArrayNumber(arrayNumber));
