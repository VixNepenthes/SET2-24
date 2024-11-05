function findGreatestCommonDivisor(numberOne, numberTwo) {
	while (numberTwo !== 0) {
		const temp = numberTwo;
		numberTwo = numberOne % numberTwo;
		numberOne = temp;
	}
	return numberOne;
}

function findLeastCommonMultiple(numberOne, numberTwo) {
	return (numberOne * numberTwo) / findGreatestCommonDivisor(numberOne, numberTwo);
}

console.log(findLeastCommonMultiple(12, 15));
