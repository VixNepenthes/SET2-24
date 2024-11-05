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

function findPrimeNumber(number) {
	if (number <= 1) {
		return '';
	}
	const arrayOfPrimeNumbers = [];
	for (let i = 2; i <= number; i++) {
		if (checkIsPrimeNumber(i)) {
			arrayOfPrimeNumbers.push(i);
		}
	}
	return `prime numbers: ${arrayOfPrimeNumbers.toString()}`;
}

console.log(findPrimeNumber(50));
