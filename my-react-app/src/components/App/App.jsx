import React from 'react';
import Users from '../Users/Users';
import { userStore } from '../userStore';

setInterval(() => {
	userStore.addUser('foo');
}, 1000);

const App = () => {
	return (
		<div>
			<h1>TienVi is learning...</h1>
			<Users store={userStore} />
		</div>
	);
};

export default App;
