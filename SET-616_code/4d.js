function longestPalindrome(string) {
	let longestPalindrome = '';
	for (let i = 0; i < string.length; i++) {
		for (let j = i; j < string.length; j++) {
			let currentString = string.substring(i, j + 1);
			if (isPalindrome(currentString) && currentString.length > longestPalindrome.length) {
				longestPalindrome = currentString;
			}
		}
	}
	return longestPalindrome;
}

function isPalindrome(string) {
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

console.log(longestPalindrome('forgeeksskeegfor'));
