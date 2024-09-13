function isPrimeNumber(number) {
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

console.log(isPrimeNumber(11));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(17));
console.log(isPrimeNumber(19));
console.log(isPrimeNumber(5));
