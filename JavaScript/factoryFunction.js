// Factory FUnction

function createCar(color, brand){
    return{
        color,
        brand,
        start(){
            console.log("Started");
        }
    }
}

let car1= createCar("blue", "Audi");
let car2= createCar("Black", "BMW");

console.log(car1);
console.log(car2);