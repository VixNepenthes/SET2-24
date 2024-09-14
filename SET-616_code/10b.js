function greatestCommonDivisor(numberOne, numberTwo) {
	while (numberTwo !== 0) {
		const temp = numberTwo;
		numberTwo = numberOne % numberTwo;
		numberOne = temp;
	}
	return numberOne;
}

function leastCommonMultiple(numberOne, numberTwo) {
	return (numberOne * numberTwo) / greatestCommonDivisor(numberOne, numberTwo);
}

console.log(leastCommonMultiple(12, 15));
