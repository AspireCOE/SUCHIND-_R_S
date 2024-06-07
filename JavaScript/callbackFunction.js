
function displayGreeting(displayName){
    console.log("Hello!!");
    displayName();
    console.log("Good Morning");
}

displayGreeting(function(){
    console.log("Susi");
});



// By function declaration
function myNmae(){
    console.log("My name is Susi");
}
displayGreeting(myNmae);


//By Function Expression

let displayName=function(){
    console.log("SUCHIND");
}
displayGreeting(displayName);