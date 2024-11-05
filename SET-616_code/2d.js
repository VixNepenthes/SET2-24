function checkIsPrimeNumber(number) {
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

function findAndPrintPrimeNumberInside(number) {
	if (number <= 100000) {
		return 'number must bigger than 100000';
	}
	let arrayOfPrimeNumbers = [];
	while (number > 0) {
		let temporaryNumber = number % 10;
		if (checkIsPrimeNumber(temporaryNumber)) {
			arrayOfPrimeNumbers.push(temporaryNumber);
		}
		number = Math.floor(number / 10);
	}
	return `Prime numbers: ${arrayOfPrimeNumbers.toString()}`;
}

console.log(findAndPrintPrimeNumberInside(13456523267983));
