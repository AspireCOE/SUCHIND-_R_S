function greet(){
    console.log("Good Morning");
}

greet();

function getNationalBird(){
    let nationalBird= "Peacock";
    return nationalBird;
}

result= getNationalBird();
console.log(result);

let first_integer=23;
let second_integer=32;
sumOfTwo(first_integer, second_integer);

function sumOfTwo(first_integer, second_integer){
    const average= (first_integer+second_integer)/2;
    console.log(average);
}


let string="231"
let number=convertStringInt(string);
console.log(number);

function convertStringInt(string){
    num= parseInt(string);
    return num;
}
