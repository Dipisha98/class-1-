//Create a pratical using all of our knowledge on javascript
//to calcluate our ages on seconds

//Declare variables
var currentyear
var birthyear
//Create a function to calculate the values and show the information
function calculate(currentyear,birthyear)
{
    var seconds=365*24*60*60
    var age=currentyear-birthyear
    var seconds_value=age*seconds
    if (age>=18)
    {console.log("You are approximately "+age+" years old. You are an adult."+"This means you have been on this planet for "+seconds_value+" seconds!");}
    else
    {console.log("You are apprioxmately"+age+" years old. You are not an adult."+"This means you have been on this planet for "+seconds_value+" seconds!")};
}   

//Call the function and give the values (parameters)
calculate(2025,2012);

