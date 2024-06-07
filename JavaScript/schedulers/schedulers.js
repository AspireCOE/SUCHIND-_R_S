<<<<<<< HEAD
let setIntervalBtnEl = document.getElementById("setIntervalBtn");
let clearIntervalBtnEl = document.getElementById("clearIntervalBtn");

let uniqueId = null;

setIntervalBtnEl.onclick = function() {
  let counter = 0;
  uniqueId = setInterval(function() {
    console.log(counter);
    counter = counter + 1;
  }, 1000);
};

clearIntervalBtnEl.onclick = function() {
  clearInterval(uniqueId);
  console.log("Interval cleared");
};

let setTimeoutBtnEl = document.getElementById("setTimeoutBtn");

setTimeoutBtnEl.onclick = function() {
  setTimeout(function() {
    console.log("Hello");
  }, 3000);
=======
let setIntervalBtnEl = document.getElementById("setIntervalBtn");
let clearIntervalBtnEl = document.getElementById("clearIntervalBtn");

let uniqueId = null;

setIntervalBtnEl.onclick = function() {
  let counter = 0;
  uniqueId = setInterval(function() {
    console.log(counter);
    counter = counter + 1;
  }, 1000);
};

clearIntervalBtnEl.onclick = function() {
  clearInterval(uniqueId);
  console.log("Interval cleared");
};

let setTimeoutBtnEl = document.getElementById("setTimeoutBtn");

setTimeoutBtnEl.onclick = function() {
  setTimeout(function() {
    console.log("Hello");
  }, 3000);
>>>>>>> b8065e3 (ASPIRE)
};