"use strict";
class TakePhoto1 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8;
    }
}
class Instagram1 extends TakePhoto1 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    geSepia() {
        console.log('sepia');
    }
}
const tienvi1 = new Instagram1('test', 'Test', 3);
