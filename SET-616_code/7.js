function fibonacci(number) {
	let arrayOfFibonacci = [0, 1];
	for (let i = 2; i < number; i++) {
		arrayOfFibonacci[i] = arrayOfFibonacci[i - 1] + arrayOfFibonacci[i - 2];
	}
	return arrayOfFibonacci.toString();
}

console.log(fibonacci(10));
