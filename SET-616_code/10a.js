function greatestCommonDivisor(numberOne, numberTwo) {
	while (numberTwo !== 0) {
		const temp = numberTwo;
		numberTwo = numberOne % numberTwo;
		numberOne = temp;
	}
	return numberOne;
}

console.log(greatestCommonDivisor(24, 36));
