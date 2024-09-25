import React, { useContext, useState } from 'react';
import CounterContext from '../context/CounterContext';

const CounterB = () => {
	const { counter, handleClick } = useContext(CounterContext);
	const [count, setCount] = useState(0);
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
					onClick={handleClick}
				>
					Click counter A
				</button>
			</div>
			<div>
				<span>Counted: {count}</span>
				<button
					style={{ marginLeft: '5px' }}
					onClick={() => setCount(count + 1)}
				>
					Click counter B
				</button>
			</div>
		</div>
	);
};

export default CounterB;
