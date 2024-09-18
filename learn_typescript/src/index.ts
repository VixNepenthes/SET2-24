// class User {
// 	email: string;
// 	name: string;
// 	constructor(email: string, name: string) {
// 		this.email = email;
// 		this.name = name;
// 	}
// }

class User {
	protected _courseCount: number = 1;
	constructor(public email: string, public name: string) {}

	private deleteToken(): void {
		console.log('delete token');
	}

	get getAppleEmail(): string {
		return `apple${this.email}`;
	}

	get getCourseCount(): number {
		return this._courseCount;
	}

	set courseCount(courseNum: number) {
		if (courseNum <= 1) {
			throw new Error('sdsds');
		}
		this._courseCount = courseNum;
	}
}

class SubUser extends User {
	isFamily: boolean = true;
	changeCourseCount() {
		this._courseCount = 4;
	}
}
const tienvi = new User('vi@v.com', 'vi');
