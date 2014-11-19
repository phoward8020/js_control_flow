// ------------------------------------------------------------------------- 
// INSTRUCTIONS:
// ------------------------------------------------------------------------- 
//
// Write a program that will take a hardcoded string, and console log the 
// reversed version of it. Use a `for` loop
//
//      `var inputString = "building"`
//
// ------------------------------------------------------------------------- 

var inputString = "building";
var inputArray = inputString.split('');

// simplest way
for ( var i = inputArray.length - 1 ; i >= 0 ; i -= 1 ) {
    console.log(inputArray[i]);
};

// all in one string

