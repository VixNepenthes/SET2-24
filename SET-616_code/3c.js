function isPerfectSquare(number) {
	if (number <= 0) {
		return false;
	}
	let squareRootNumber = Math.sqrt(number);
	return squareRootNumber * squareRootNumber === number;
}

console.log(isPerfectSquare(144));
