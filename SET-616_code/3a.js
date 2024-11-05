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

console.log(checkIsPrimeNumber(11));
console.log(checkIsPrimeNumber(7));
console.log(checkIsPrimeNumber(17));
console.log(checkIsPrimeNumber(19));
console.log(checkIsPrimeNumber(5));
