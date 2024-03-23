#!/usr/ben/env node
import  inquirer from  "inquirer"

//1, computer will generate  a number

//2, user input for guessing number

//3, compare user input wit computer number and sho result


const randomNumber =Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message:"please guess a anumber between 1-6: ",
    
    },
]);
if(answers.userGuessNumber === randomNumber) {
    console.log("congrurltion! you right number.");
} else{
    console.log("you guessed wrong number");
}