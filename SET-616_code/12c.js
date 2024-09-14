function calculateRowOrColumn2DArray(arrayNumber, k, isRow) {
	let sum = 0;
	if (isRow) {
		for (let j = 0; j < arrayNumber[k].length; j++) {
			sum += arrayNumber[k][j];
		}
	} else {
		for (let i = 0; i < arrayNumber.length; i++) {
			sum += arrayNumber[i][k];
		}
	}
	return sum;
}

let arrayNumber = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
];
console.log(tinhTongHangCot(arrayNumber, 1, false));
