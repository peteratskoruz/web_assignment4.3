/**import namespace and export class function**/

//import namespace

import {VechicleNameSpace} from './interface';

//defining class function

export function carDetails2(car: VechicleNameSpace.Car){
    console.log(` The car details are : Model ${car.model} , 
     Engine ${car.engine} and the horespower is ${car.horsePower}`);
}