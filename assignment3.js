// use a prompt library since node's runtime is different than google's V8 runtime which runs in chrome
const prompt = require('prompt-sync')();

// "main" function since there is no direct equivelant in javascript
// this immediate function will execute automatically and guide the user through the script
(function(){
    console.log("Hello! Please input a number then press enter. To Stop adding numbers, input * \n");
    num = prompt("");
    list = [];

    while (num != "*"){
        num = parseInt(num)
        if (!isNaN(num)){
            list.push(num)
        }else{
            console.log("Previous input is not a number (and wasn't added to the list!) Type a number:")
        }
        num = prompt("")
    }

    console.log("Sum of Numbers: ")
    console.log(sumOfList(list) + " \n")


    console.log("Product of Numbers: ")
    console.log(productOfList(list) + " \n")

}())


function sumOfList(list){
    // returns the sum of the given array
    // sending non-numerical values will cause wonky behavior
    sum = 0
    list.forEach((i) => sum += i)
    return sum
}

function productOfList(list){
    // returns the product of the given array
    // sending non-numerical values will cause wonky behavior
    product = 1
    list.forEach((i) => product *= i)
    return product
}

// This is the change in my code that I needed to make for part 10