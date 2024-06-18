// Factory FUnction

function createCar(color, brand){
    this.color= color,
    this.brand= brand,
    this.start= function(){
        console.log("Started");
    };
};

console.log(createCar.name);  // Print name of function

console.log(createCar.length);  // Print no.of parameters passed into the function


let newCar= new createCar("Blue", "Swift"); // Creation of new Object using new keyword for Constructor Function
console.log(newCar);


//Buit-In constructor 

let timeNow= new Date();
console.log(timeNow);

let time= new Date(2021, 2, 4, 6, 12, 11, 9);
console.log(time);

time = new Date(2003, 9, 16);
console.log(time);

console.log(time.getFullYear());
console.log(time.getMonth());
console.log(time.getDay());
time.setFullYear(2021);
time.setMonth(6);
console.log(time.toString());

