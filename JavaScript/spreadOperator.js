let arr_1 = [2, 3];
let arr_2 = [1, ...arr_1, 4];    // Spread Operator

console.log(arr_2);

let concatenation = [...arr_1, ...arr_2];  //concatenation
console.log(concatenation); 

// with Objects

let person= {
    name: "Susi",
    age : 21
};

let personDetails= {
    ...person, 
    city : "Tiruppur"
};

console.log(personDetails);

let address = {
    taluk : "Kangayam",
    Pincode : 638701
}

let obj_concat = {...personDetails, ...address};
console.log(obj_concat)


//Function calls

function add(a, b, c){
    return a+b+c;
}

let numbers= [1, 2, 3, 4, 5];
console.log(add(...numbers));