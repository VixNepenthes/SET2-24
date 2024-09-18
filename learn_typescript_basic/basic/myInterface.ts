interface User {
	readonly dbId: number;
	email: string;
	userId: number;
	googleId?: string;
	startTrail(): string;
	getCoupon(couponName: string, value?: number): number;
}

interface User {
	gitKrakenToken: string;
}

interface Admin extends User {
	role: 'Admin' | 'ta' | 'learner';
}

const tienvi: User = {
	dbId: 22,
	email: 'v@v.com',
	userId: 222,
	gitKrakenToken: 'hihi',
	startTrail: () => {
		return 'trail started';
	},
	getCoupon: (name: 'videptrai', haha: 4) => {
		return 10;
	},
};

const tienviAdmin: Admin = {
	role: 'Admin',
	dbId: 23,
	email: 'v@v.com',
	userId: 333,
	gitKrakenToken: 'hh',
	startTrail: () => {
		return 'trail started';
	},
	getCoupon: (name: 'videptrai', haha: 4) => {
		return 10;
	},
};

export {};
