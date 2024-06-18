// Arrow Function
let sum = (a,b) =>{
    let result = a+b;
    return result;
};

console.log(sum(5,6));

//Simple Expression 

sum = (a, b) => a+b;
console.log(sum(7,8));

// One Parameter

let greet = name => `Hi ${name}!`;
console.log(greet("SUSI"));

// returning Object

let createUSer = name =>{
    return {
        firstName : name 
    };
};

console.log(createUSer("susi"));