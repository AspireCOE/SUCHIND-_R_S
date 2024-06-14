// Inline Event Listener
function InlineEvent(){
    console.log("WHen button is clicked. This function gets executed");
}

let onlineListenerEl= document.getElementById("onLineEvent");


//Online Event Listener
onlineListenerEl.onclick= function(){
    console.log("Hi SUSI");
}

// addEvetListener -->Modern Approach

onlineListenerEl.addEventListener('click', function(){
    console.log("HI SUSI!!!");
});