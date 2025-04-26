//Write a code to see whether a 
//student is eligible to take up 
// a subject  for the next semester

//Take global variables to store the 
// cutoff  grades or marks for 
//the subject 

//Compare under conditional 
// statement with marks or grade 
// obtained by the student

//Use separate function for 
// each subject and 
// create one local variable to show 
// the priorities

//Declare the variables

var student1grademath=98
var student1gradeenglish=74

//Eligibilty for math
//I had to search up coding lessons and used one complier to help with this part
function mathgrade(){
    let mathpriorities = 80;
    if (student1grademath>=mathpriorities) {console.log("You have a " + student1grademath + " in math. You are eligible to take math extracurriculars.");} 
    else {console.log("You are not eligible to take math extracurriculars because your grade in math is below an 80%.");}}
mathgrade();

//Eligibilty for English 
//I had to search up coding lessons and used one complier to help with this part
function englishgrade(){
    let englishpriorities = 80;
    if (student1gradeenglish>=englishpriorities) {console.log("You have a " + student1gradeenglish + " in English. You are eligible to take English extracurriculars.");} 
    else {console.log("You are not eligible to take English extracurriculars because your grade in English is below an 80%.");}}
englishgrade();






