// function trueOrFalse(value){
//     if(value){
//         console.log('true')
//     } 
//     else if(typeof value === 'boolean'){
//         console.log("The boolean value false is falsy")
//     }
//     else if(value === null){
//         console.log('the null value is falsy')
//     }
//     else if(typeof value === undefined){
//         console.log("undefined is falsey")
//     }
//     else if(typeof value === 'number' && value === 0){
//         console.log("the number 0 is falsy(the only falsey number")
//     }
//     else if( typeof value === 'string' && value === ""){
//         console.log("the empty string is falsy")
//     }
    
// }

// trueOrFalse("i am a string");
// trueOrFalse(false);
// trueOrFalse(null);
// trueOrFalse(undefined);
// trueOrFalse(0);
// trueOrFalse("");




// function numberLine(num1, num2){
//     let sum = num1 + num2
// if(sum < -1000){
//     console.log( sum + "is less than-1000")
// }
// else if(sum < 0){
//     console.log(sum + " is a negative number")
// }
// else if(sum == 0){
//     console.log( sum + " is equal to 0")
// }
// else if(sum > 0 && sum < 100){
//     console.log(sum + " is larger than 0")
// }
// else if(sum > 100){
//     console.log(sum + " is greater than 100")
// }
// }

// numberLine(50, 51);
// numberLine(99,-2);
// numberLine(0, 101);
// numberLine(500, -500);
// numberLine(-1000, 0);
// numberLine(-5, 0);




// function greaterOrEqual(num1, num2){
//     if(num1 >= 5 && num2 >= 5){
//         console.log('true')
//     }
//     else{
//         console.log('false')
//     }
// }

// greaterOrEqual(5, 6);
// greaterOrEqual(10, 11);
// greaterOrEqual(0, 0);
// greaterOrEqual(1000, -1000);
// greaterOrEqual(6, 4);
// greaterOrEqual(5, 5);





// function pairCompare(param1A, param1B, param2A, param2B){
//   if(param1A === param1B || param2A === param2B){
//     console.log('true')
//   }
//   else{
//     console.log('false')
//   }
// }
// pairCompare("cat", "cat", 6, "6");
// pairCompare("five", 5, "dog", "dawg");
// pairCompare(0, false, "horse", "horse");
// pairCompare("eight", "eight", "ate" , "ate");
// pairCompare(11, "eleven", "four", "for");
// pairCompare("cake", "cake", "pie", "pie");