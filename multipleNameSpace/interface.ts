/**export namespace and interface and function**/

// defining namespace
export namespace VechicleNameSpace{

    export interface Car{
        model: string,
        engine: string,
        horsePower: number
    }

//// defining class function
    export function carDetails(car: Car){
        console.log(` The car details are : Model ${car.model} , 
     Engine ${car.engine} and the horespower is ${car.horsePower}`);
    }

}