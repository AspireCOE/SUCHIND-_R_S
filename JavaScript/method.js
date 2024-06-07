<<<<<<< HEAD

let arr= [1, 2, 3, "Susi", "Aspire", "skct"];

let spliced_arr= arr.splice(2,3);
console.log(spliced_arr); //Deleted array

console.log(arr); // Remaining In the arr

arr.splice(3,0,"Susi", "cse", "231"); //Adding items to arr
console.log(arr);

arr.splice(1,1, 0); //Replacing items
console.log(arr); 


let index= arr.findIndex(function(eachItem){     // printing all items in the arr using testing function
    console.log(eachItem); 
});

index= arr.findIndex(function(eachItem){         // Finding the index of the item using testing function
    if(eachItem === "cse"){
        return true;
    }
    else{
        return false;
    }
});
console.log(index); 

console.log(arr.includes("231"));  //Finding the item present in the arr or not

console.log(arr.indexOf("cse"));
console.log(arr.lastIndexOf("cs"));  //both are using to find the index of the item

let item= arr.find(function(eachItem){   //[Find] method is used to find the item which satisfies the testing function 
    if(eachItem === "cse"){
        return true;
    }
    else{
        return false;
    }
});
console.log(item);

arr.shift(); //shift removes the first element in the array
console.log(arr);

arr.unshift(1, 4, 7);  // unshift adds items from the beginning of the arr (starts from 0th index)
console.log(arr);

let arr2=["aspire", "coe", 2024];
const new_arr= arr.concat(arr2);   // concat used to concatinating two arrays
console.log(new_arr);

let required_items= new_arr.slice(4, 8); //slice is used to get the specified partitions in the array 
console.log(required_items);

let combined_arr=required_items.join("-"); // join method used to separate the array items by using separator
console.log(combined_arr);

required_items.sort();
console.log(required_items);  // sort is used to order the items in alphabetical order







=======

let arr= [1, 2, 3, "Susi", "Aspire", "skct"];

let spliced_arr= arr.splice(2,3);
console.log(spliced_arr); //Deleted array

console.log(arr); // Remaining In the arr

arr.splice(3,0,"Susi", "cse", "231"); //Adding items to arr
console.log(arr);

arr.splice(1,1, 0); //Replacing items
console.log(arr); 


let index= arr.findIndex(function(eachItem){     // printing all items in the arr using testing function
    console.log(eachItem); 
});

index= arr.findIndex(function(eachItem){         // Finding the index of the item using testing function
    if(eachItem === "cse"){
        return true;
    }
    else{
        return false;
    }
});
console.log(index); 

console.log(arr.includes("231"));  //Finding the item present in the arr or not

console.log(arr.indexOf("cse"));
console.log(arr.lastIndexOf("cs"));  //both are using to find the index of the item

let item= arr.find(function(eachItem){   //[Find] method is used to find the item which satisfies the testing function 
    if(eachItem === "cse"){
        return true;
    }
    else{
        return false;
    }
});
console.log(item);

arr.shift(); //shift removes the first element in the array
console.log(arr);

arr.unshift(1, 4, 7);  // unshift adds items from the beginning of the arr (starts from 0th index)
console.log(arr);

let arr2=["aspire", "coe", 2024];
const new_arr= arr.concat(arr2);   // concat used to concatinating two arrays
console.log(new_arr);

let required_items= new_arr.slice(4, 8); //slice is used to get the specified partitions in the array 
console.log(required_items);

let combined_arr=required_items.join("-"); // join method used to separate the array items by using separator
console.log(combined_arr);

required_items.sort();
console.log(required_items);  // sort is used to order the items in alphabetical order







>>>>>>> b8065e3 (ASPIRE)
