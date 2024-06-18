// this in Object Methods

let car={
    color: "Blue",
    brand: "Audi",
    start: function(){
        console.log(this);
    }
};

car.start();


// this in regualr function 

function regular() {
    console.log(this);  // Window
  }
regular();

// this in arrow Function

// arrow function with object Methods
let bike = {
    color: "red",
    brand: "KTM",
    start: () => {
      console.log(this);  // Window { }
    }
  };
  
  bike.start();

// arrow function with callbacks

bike = {
    color: "red",
    brand: "KTM",
    stop: () => {
        setTimeout(() => {
            console.log(this); 
        }, 1000);  
    }
  };
  
  bike.stop();