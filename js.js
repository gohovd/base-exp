// Collect HTML Element
let tbox = document.getElementById("testbox"); // BUTTON
let baseIn = document.getElementById("base"); // INPUT, BASE
let exponentIn = document.getElementById("exponent"); // INPUT, EXPONENT
let output = document.getElementById("output"); // OUTPUT RESULTS (STRINGS) HERE


// Define function
const makeNoise = function() {
  console.log("Pling bb!");
}

let result = 1;
const power = function(base, exponent) {
  if(base > 0 && exponent > 0) {
    result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    output.innerHTML = base + "*" + exponent + " = " + result;
    
  } else {
    result = "Please pass legal args.";
    output.innerHTML = result;
  }
  output.classList.add("outputTxt");
  return result;
}

// Attach the function a response to click event on the html element
tbox.addEventListener("click", function() {
  power(baseIn.value, exponentIn.value);
}, false);


function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice);