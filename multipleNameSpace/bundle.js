"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VechicleNameSpace;
(function (VechicleNameSpace) {
    function carDetails(car) {
        console.log(" The car details are : Model " + car.model + " , \n     Engine " + car.engine + " and the horespower is " + car.horsePower);
    }
    VechicleNameSpace.carDetails = carDetails;
})(VechicleNameSpace = exports.VechicleNameSpace || (exports.VechicleNameSpace = {}));


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function carDetails2(car) {
    console.log(" The car details are : Model " + car.model + " , \n     Engine " + car.engine + " and the horespower is " + car.horsePower);
}
exports.carDetails2 = carDetails2;


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("./interface");
var function_1 = require("./function");
var myCar = { engine: 'Z1000', horsePower: 2200, model: 'Swift Z' };
var myCar2 = { engine: 'Zx000', horsePower: 1200, model: 'Wagon R' };
interface_1.VechicleNameSpace.carDetails(myCar);
function_1.carDetails2(myCar2);
