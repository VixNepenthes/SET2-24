import React from 'react';
import './App.css';
import Game from '../Game';
import CounterA from '../CounterA';
import { CounterContextProvider } from '../context/CounterContext';
const App = () => {
	return (
		<CounterContextProvider>
			<CounterA />
		</CounterContextProvider>
	);
};

export default App;
