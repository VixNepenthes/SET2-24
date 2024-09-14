function findMostFrequentCharacter(string) {
	const objectOfFrequentCharacters = {};
	let maxFrequency = 0;
	let mostFrequentCharacter = '';
	for (let character of string) {
		objectOfFrequentCharacters[character] = (objectOfFrequentCharacters[character] || 0) + 1;
		if (objectOfFrequentCharacters[character] > maxFrequency) {
			maxFrequency = objectOfFrequentCharacters[character];
			mostFrequentCharacter = character;
		}
	}
	return `${mostFrequentCharacter} appears most with total: ${maxFrequency}`;
}

console.log(findMostFrequentCharacter('fshfkshfkshsfhkesssf'));
