
let arrayOfScores=[25, 32, 43, 56];
let total=0;

for(let scores of arrayOfScores){
    total+=scores;
    console.log(total);
}

console.log(total);



let personDetails=[
    {
        name: "Susi",
        age: 20},
    {
        name: "SUCI",
        age: 18
    },
    { 
        name:"SUCHIND", 
        age: 15
    }
];

function findEligibility(num){
    let person= personDetails[num];
    console.log(person);
    let age=person["age"];
    console.log(age);

    const name= person['name'];
    console.log(name);

    if(age >= 18){
        console.log("This person is Eligible");
    }
    else{
        console.log("This Person is not Eligible");
    }
}

for(let num in personDetails){
    findEligibility(num);
}
