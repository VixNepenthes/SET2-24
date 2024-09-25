import React, { useContext, useState } from 'react';
import CounterB from '../CounterB';
import CounterContext from '../context/CounterContext';

const CounterA = () => {
	const { counter, handleClick } = useContext(CounterContext);
	return (
		<div
			style={{
				border: '1px solid #000',
				width: '500px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<h1>CounterA</h1>
			<div>
				<span>Counted: {counter}</span>
				<button
					style={{ marginLeft: '5px' }}
					onClick={handleClick}
				>
					Click
				</button>
			</div>
			<CounterB />
		</div>
	);
};

export default CounterA;
