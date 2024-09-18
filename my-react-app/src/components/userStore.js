import { makeObservable, observable, action, computed } from 'mobx';

class UserStore {
	users = [];

	constructor() {
		makeObservable(this, {
			users: observable,
			addUser: action,
			totalUser: computed,
		});
	}

	addUser = (name) => {
		const newUser = {
			id: +Math.random().toFixed(4),
			name,
		};
		this.users.push(newUser);
	};

	get totalUser() {
		return this.users.length;
	}
}

export const userStore = new UserStore();
