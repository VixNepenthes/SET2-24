import { createContext, useState } from 'react';

const CounterContext = createContext();

export function CounterContextProvider({ children }) {
	const [counter, setCounter] = useState(0);

	function handleClick() {
		setCounter(counter + 1);
	}
	return (
		<CounterContext.Provider
			value={{
				counter,
				handleClick,
			}}
		>
			{children}
		</CounterContext.Provider>
	);
}

export default CounterContext;
