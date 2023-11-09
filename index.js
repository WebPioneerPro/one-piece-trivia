#!/usr/bin/env node

//Imports
import chalk from 'chalk'; // Import the chalk library for colored text
import readlineSync from 'readline-sync'; // Import readlineSync for user input

// Initialize a variable to keep track of the user's score
var point = 0;

// Display an ASCII art title in blue using chalk
console.log(chalk.blue(`   ____               _____ _                 _______   _       _        
/ __ \\             |  __ (_)               |__   __| (_)     (_)       
| |  | |_ __   ___  | |__) |  ___  ___ ___     | |_ __ ___   ___  __ _  
| |  | | '_ \\ / _ \\ |  ___/ |/ _ \\/ __/ _ \\    | | '__| \\ \\ / / |/ _\` | 
| |__| | | | |  __/ | |   | |  __/ (_|  __/    | | |  | |\\ V /| | (_| | 
\\____/|_| |_|\\___| |_|   |_|\\___|\\___\\___|    |_|_|  |_| \\_/ |_|\`__,_| 
                                                                         
                                                                        `))

// Welcome message for the quiz
console.log("Test Your One Piece Knowledge: 5 Questions to Become the Ultimate Straw Hat Pirate!")
console.log('')

// Ask the user for their name
let username = readlineSync.question("Whats your name? ")
console.log(`Great, ${chalk.magenta(username)}! You're all set. Let's dive into the world of One Piece and see how well you know this epic adventure.`)
console.log('')

// Define a function for the quiz questions
function quizGame(question,options,answer,number){
    console.log(`Q${number}`)
    // Ask the user to select an option and store the index in 'index'
    let index = readlineSync.keyInSelect(options,chalk.bold.yellow(question),{cancel:false});
    // Check if the selected option is correct and provide feedback
    if(options[index] == answer){
        console.log(chalk.green('You are right'));
        point += 1;
    }else{
        console.log(chalk.red('Wrong Answer!'))
    }
}

// Define the questions and their options
let questionOne = {
    question:"Who was the first Straw Hat to be shown in the anime?",
    options:["Luffy","Zoro","Nami","Ussop"],
    answer: "Nami",
}

let questionTwo = {
    question:"Who is the first antagonist of One Piece?",
    options:["'Axe-Hand' Morgan","Buggy the Star Clown","'Iron Mace' Alvida","Kuro of a Hundred Plans"],
    answer: "'Iron Mace' Alvida",
}

let questionThree = {
    question:"What is the name of the dog in Orange Town?",
    options:["Richie","Robson","Chuchun","Chouchou"],
    answer: "Chouchou",
}

let questionFour = {
    question:"How many times did Zoro lose to Kuina?",
    options:["101","2001","201","1001"],
    answer: "2001",
}

let questionFive = {
    question:"In One Piece, what is the name of Portgas D. Ace's mother, who managed to keep her pregnancy with Ace a secret from the world?",
    options:["Portgas D. Rose","Portgas D. Rouge","Portgas D. Ruby","Portgas D. Roxanne"],
    answer: "Portgas D. Rouge",
}

// Define other questions in a similar manner

let questionArray = [questionOne,questionTwo,questionThree,questionFour,questionFive,/* Add other questions here */]

// Loop through each question and call the quizGame function
for(let i=0;i<questionArray.length;i++){
    quizGame(questionArray[i].question,questionArray[i].options,questionArray[i].answer,i+1)
}

// Provide feedback based on the user's score
if (point === 5) {
    console.log(chalk.green('Congratulations! You scored 5 out of 5. You are a One Piece expert!'));
  } else if (point >= 3) {
    console.log(chalk.yellow(`Well done! You scored ${point} out of 5. You know your One Piece trivia!`));
  } else {
    console.log(chalk.red(`Thanks for playing! You scored ${point} out of 5. Keep exploring the world of One Piece!`));
  }
