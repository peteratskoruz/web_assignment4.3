/**import interface and namespace and function**/

// import namespace
import {VechicleNameSpace} from './interface';

// import class function

import {carDetails2} from './function';

let myCar: VechicleNameSpace.Car = {engine: 'Z1000', horsePower: 2200, model: 'Swift Z'};

let myCar2: VechicleNameSpace.Car = {engine: 'Zx000', horsePower: 1200, model: 'Wagon R'};

VechicleNameSpace.carDetails(myCar);

carDetails2(myCar2);