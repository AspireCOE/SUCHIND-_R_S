
let personDetails= {
    name: "Susi",
    regNo: 231,
    skills: ["HTML", "CSS", "JavaScript", "Python", "SQL"]
}

console.log(personDetails);

let id= personDetails.regNo;
console.log(id);

const employee=personDetails["name"];
console.log(employee);

personDetails["regNo"]="01";
console.log(personDetails);

personDetails['Habits']=["playing", "Reading"];
console.log(personDetails);
