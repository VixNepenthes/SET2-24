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

function isPalindrome1(string) {
	if (string === '') {
		return 'error! it is not string';
	}
	const reversedString = reverseString(string);
	return reversedString === string;
}

// Solution 2

function isPalindrome2(string) {
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

console.log(isPalindrome1('abcdcba'));
console.log(isPalindrome2('abcdcba'));
