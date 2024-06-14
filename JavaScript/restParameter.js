// Rest parameter
function numbers(...args){ 
    console.log(args);
}

numbers(1, 2, 3);

//Arrays
let [a, b, ...rest] = [1, 2, 3, 4];

console.log(a);
console.log(b);
console.log(rest);

