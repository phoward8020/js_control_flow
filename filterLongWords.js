// ------------------------------------------------------------------------- 
// INSTRUCTIONS:
// ------------------------------------------------------------------------- 
//
// Hardcode an array of words. Have a variable maxLength, push words 
// that are less than the maxLength into a new array, and console.log that.
//
// ------------------------------------------------------------------------- 

var maxLength = 6;
var words = [   "Hardcode", 
                "an",
                "array",
                "of",
                "words",
                "Have",
                "a",
                "variable",
                "maxLength",
                "push",
                "words",
                "that",
                "are",
                "less",
                "than",
                "the",
                "maxLength",
                "into",
                "a",
                "new",
                "array",
                "and",
                "console",
                "log",
                "that"  ];
var shortWords = [];

for (var i = 0; i < words.length; i++) {
    if (words[i].length < maxLength) {
        shortWords.push(words[i]);
    }
};

console.log('');
console.log('Here is my original array of words:');
console.log(words);
console.log('');
console.log('Here are the words shorter than ' + maxLength + ' characters:');
console.log(shortWords);



