function countVowels(string) {
	if (typeof string !== 'string') {
		return 'input must be string';
	}
	const arrayOfVowels = ['u', 'e', 'o', 'a', 'i', 'U', 'E', 'O', 'A', 'I'];
	let count = 0;
	for (let character of string) {
		for (let i = 0; i < arrayOfVowels.length; i++) {
			if (character === arrayOfVowels[i]) {
				count++;
				break;
			}
		}
	}
	return count;
}

console.log('Total vowels in string: ', countVowels('fsebfhfuhhsfseajfjgoejejei'));
