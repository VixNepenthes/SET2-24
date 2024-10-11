import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../store/slice/counterSlice';

const CounterB = () => {
	const dispatch = useDispatch();
	const [counter, setCounter] = useState(0);
	return (
		<div
			style={{
				border: '1px solid #333',
				textAlign: 'center',
				width: '200px',
				marginBottom: '100px',
				marginTop: '100px',
			}}
		>
			<h1>CounterB</h1>
			<div style={{ marginBottom: '20px' }}>
				<button
					style={{ marginLeft: '5px' }}
					onClick={() => dispatch(increment())}
				>
					Click counter A
				</button>
			</div>
			<div>
				<span>Counted: {counter}</span>
				<button
					style={{ marginLeft: '5px' }}
					onClick={() => setCounter(counter + 1)}
				>
					Click counter B
				</button>
			</div>
		</div>
	);
};

export default CounterB;
