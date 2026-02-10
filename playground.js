console.log('javaScript Playground Ready') // console -> obj , log-> function 
// tradition function in javaScript 
function add(a,b){
    return a+b;
}
// we use either '' or "" for string ; 
// we can use ";" or not 
// syntax for running java script program -> node filename 
console.log(add(50,10));  // calling the function 

// Arrow function (modorn function definition in js
const addArrow = (a,b) => a+b;
// variable_name = (program) => definition;
console.log("addArrows : ",addArrow(10,20));
console.log("addArrows: ",addArrow); // -> used to display the difintion of arrow function 

//const subArrow = (a,b) => {a+b}; // when difinition is more than one line use {}
// console.log("subArrows : ",subArrow(50,20)); // -> this give undefine -> when we use {} we need to return 
const subArrow = (a,b) => {
    return a+b // when we use {} then  we use return keyword for retruning the correct ans;
}; 
console.log("subArrows : ",subArrow(50,20)); 
// function for return the squre of any given number 

const squre = (n) =>  n*n;
console.log("squre : ",squre(5))
const squreNumber = n => {
    return n*n
}
console.log("squre : ",squre(10))



// function with formatted string 
const greeting = (name) =>{
    // here we use backtick symbol
    return `hello, ${name}` // when we use backtick we pas exprsion in string 
}
console.log(greeting("sachin"))
// when user not pass any parameter we use default parameter 
const greeting1 = (name='Guest') =>{
    return `hello, ${name}` 
}
console.log(greeting1()) // here this function print default value during greeting1 functon calling 


// Creating Array in java Script

        // in java script array is an object 
const numbers = [1,2,3,4,5]
console.log(numbers)
// -> map() is a function 
const doubled = numbers.map(n=> n*2);  // here it doubled all the entity of numbers array ;
// here in map we pass Arrow functon , n will take each element one by one;
console.log(doubled)
const tripled = numbers.map(n=> n*3)
console.log(tripled)

// Arrow function + condition 
const checkAge = age => age>= 18 ? "adult": "minor"
console.log(checkAge(18)) // adult
console.log(checkAge(10)) // minor
console.log(checkAge(20)) // adult

// destructuring 
