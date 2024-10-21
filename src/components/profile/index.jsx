import React from 'react';

const user = {
	name: 'Nham Gia Luan',
	imageUrl:
		'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Fname%2Fnm5483679%2F&psig=AOvVaw3NCYlN6OkJVQDoO5_EhVd7&ust=1728720354480000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjR-qrvhYkDFQAAAAAdAAAAABAW',
	imageSize: 300,
};

export default function Profile() {
	return (
		<div class='profile'>
			<h1>Displaying data </h1>
			<h2>{user.name}</h2>
			<img
				src={user.imageUrl}
				alt='Profile'
				style={{
					width: user.imageSize,
				}}
			/>
		</div>
	);
}
