// ------------------------------------------------------------------------- 
// INSTRUCTIONS:
// ------------------------------------------------------------------------- 
//
// Output the following letter grade from a variable with with a test score. 
// Display either "A", "B", "C", "D", or "F", for an score that is an integer 
// between 0 and 100. **Bonus: Try it again with a switch statement **
//
// ------------------------------------------------------------------------- 

var score;
var grade;

// using if statement
score = 84;
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score > 70) {
    grade = 'C';
} else if (score > 60) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log('score = ' + score + '; grade = ' + grade);


// using switch statement
score = 66;

switch(true){
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80:
        grade = 'B';
        break;
    case score >= 70:
        grade = 'C';
        break;
    case score >= 60:
        grade = 'D';
        break;
    case score >= 50:
        grade = 'F';
        break;
    default:
        grade = 'Unknown';
}

console.log('score = ' + score + '; grade = ' + grade);
