/*Function delcarations
2 types --> Function declaration & Function expression

//Function delcaration -- Can be called before or after declaration
function getAge(year){
    return 2021-year;
}

console.log(getAge(1993));

//Function expression -- Can be called only after declaration
let calculateAge = function (birthYear){
    return 2021-birthYear;
}

console.log(calculateAge(1993));
*/
//Arrow Functions, added in ES6
//Useful for one liner functions with taking in only one parameter 💆
calculateAge = birthYear => 2021 - birthYear;

console.log(calculateAge(1991));

//Another example

calcAge = (birthYear, firstName) => {
    let age = 2021 - birthYear;
    let retirementage = 65- age;

    return `${firstName} retires in ${retirementage} years`;
}

console.log(calcAge(1993, 'John'));
