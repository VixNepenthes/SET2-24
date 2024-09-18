abstract class TakePhoto1 {
	constructor(public cameraMode: string, public filter: string) {}

	abstract geSepia(): void;
	getReelTime(): number {
		return 8;
	}
}

class Instagram1 extends TakePhoto1 {
	constructor(public cameraMode: string, public filter: string, public burst: number) {
		super(cameraMode, filter);
	}
	geSepia(): void {
		console.log('sepia');
	}
}
const tienvi1 = new Instagram1('test', 'Test', 3);
