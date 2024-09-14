function findLongestSubsequence(arrayOfNumbersOrString, isIncreasing = true) {
	let maxLength = 1;
	let currentLength = 1;
	if (typeof arrayOfNumbersOrString === 'string') {
		for (let i = 1; i < arrayOfNumbersOrString.length; i++) {
			if (
				(isIncreasing &&
					arrayOfNumbersOrString.charCodeAt(i) >= arrayOfNumbersOrString.charCodeAt(i - 1)) ||
				(!isIncreasing &&
					arrayOfNumbersOrString.charCodeAt(i) <= arrayOfNumbersOrString.charCodeAt(i - 1))
			) {
				currentLength++;
			} else {
				currentLength = 1;
			}
			if (currentLength > maxLength) {
				maxLength = currentLength;
			}
		}
	} else {
		for (let i = 1; i < arrayOfNumbersOrString.length; i++) {
			if (
				(isIncreasing && arrayOfNumbersOrString[i] >= arrayOfNumbersOrString[i - 1]) ||
				(!isIncreasing && arrayOfNumbersOrString[i] <= arrayOfNumbersOrString[i - 1])
			) {
				currentLength++;
			} else {
				currentLength = 1;
			}
			if (currentLength > maxLength) {
				maxLength = currentLength;
			}
		}
	}

	return maxLength;
}

// Ví dụ: Tìm dãy con tăng dài nhất
const arrayOfNumbersOrString = [3, 10, 8, 5, 2, 1, 20, 30, 40, 20];
console.log(
	'Độ dài dãy số con tăng dài nhất:',
	findLongestSubsequence(arrayOfNumbersOrString, true)
);
console.log(
	'Độ dài dãy số con giảm dài nhất:',
	findLongestSubsequence(arrayOfNumbersOrString, false)
);

const string = 'abcdefgfsadwfvbgs';
console.log('Độ dài chuỗi kí tự tăng dài nhất:', findLongestSubsequence(string, true));
console.log('Độ dài chuỗi kí tự giảm dài nhất:', findLongestSubsequence(string, false));
