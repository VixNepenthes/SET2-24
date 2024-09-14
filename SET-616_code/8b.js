function countOccurences(string, character) {
	if (typeof string !== 'string' || typeof character !== 'string') {
		return 'input string or character must be string';
	}
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === character) {
			count++;
		}
	}
	return count;
}
console.log(countOccurences('fshfkshfkshsfhkesf', 'f'));
