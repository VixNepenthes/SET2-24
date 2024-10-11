import React from 'react';
import CounterB from '../CounterB';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../store/slice/counterSlice';
const CounterA = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
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
				<span>Counted: {count}</span>
				<button
					style={{ marginLeft: '5px' }}
					onClick={() => dispatch(increment())}
				>
					Click
				</button>
			</div>
			<CounterB />
		</div>
	);
};

export default CounterA;
