// Solution 1
function reverseString(string) {
	if (string === '') {
		return '';
	}
	let reversedString = '';
	for (let i = string.length - 1; i >= 0; i--) {
		reversedString += string[i];
	}
	return reversedString;
}

function checkIsPalindrome1(string) {
	if (string === '') {
		return 'error! it is not string';
	}
	const reversedString = reverseString(string);
	return reversedString === string;
}

// Solution 2

function checkIsPalindrome2(string) {
	let left = 0;
	let right = string.length - 1;
	while (left < right) {
		if (string[left] !== string[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
}

console.log(checkIsPalindrome1('abcdcba'));
console.log(checkIsPalindrome2('abcdcba'));
