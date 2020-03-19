"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var wantsToEnterNumber = confirm("Would you like to enter a number?")

if (wantsToEnterNumber) {
    var number = prompt("Please enter your number.")
} else {
    alert("Thats ok, thank you!")
}

function evenOrOdd(number) {
    if (wantsToEnterNumber) {
        if (parseInt(number) % 2 === 0) {
            alert("Your number is even!")
        } else {
            alert("Your number is odd!")
        }
    }
}

evenOrOdd(number);

function plus100(number) {
    if (wantsToEnterNumber) {
        if (number) {
            alert("Your number added to 100 is: " + (parseInt(number) + 100))
        }
    }
}

plus100(number);

function isOddOrEven(number) {
    if (wantsToEnterNumber) {
        if (number >= 0) {
            alert("Your number is a positive number!")
        } else {
            alert("Your number is negative!")
        }
    }
}

isOddOrEven(number);

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if (color === randomColor) {
        switch (color) {
            case 'blue':
                console.log("blue is the color of the sky");
                break;
            case 'red':
                console.log("Strawberries are red");
                break;
            case 'cyan':
                console.log("I don't know anything about cyan");
                break;
            default :
                console.log(color + " is not defined in the list");
                break;
        }
    }
    if (color === userColor) {
        switch (userColor) {
            case 'blue':
                alert("blue is the color of the sky");
                break;
            case 'red':
                alert("Strawberries are red");
                break;
            case 'cyan':
                alert("I don't know anything about cyan");
                break;
            default :
                alert(userColor + " is not defined in the list");
                break;
        }
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

analyzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("please enter a color").toLowerCase();

analyzeColor(userColor);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalAmount = prompt("What is your total cost in items?");

function calculateTotal(number) {
    if (luckyNumber === 0) {
        alert("You got: " + luckyNumber + ", giving you no discount!");
    } else if (luckyNumber === 1) {
        alert("You got: " + luckyNumber + ", giving you a 10% discount. Your old total used to be: $" + totalAmount + " now your total is: $" + (parseInt(totalAmount) - (.10 * parseInt(totalAmount))));
    } else if (luckyNumber === 2) {
        alert("You got: " + luckyNumber + ", giving you a 25% discount. Your old total used to be: $" + totalAmount + " now your total is: $" + (parseInt(totalAmount) - (.25 * parseInt(totalAmount))));
    } else if (luckyNumber === 3) {
        alert("You got: " + luckyNumber + ", giving you a 35% discount. Your old total used to be: $" + totalAmount + " now your total is: $" + (parseInt(totalAmount) - (.35 * parseInt(totalAmount))));
    } else if (luckyNumber === 4) {
        alert("You got: " + luckyNumber + ", giving you a 50% discount. Your old total used to be: $" + totalAmount + " now your total is: $" + (parseInt(totalAmount) - (.50 * parseInt(totalAmount))));
    } else if (luckyNumber === 5) {
        alert("You got: " + luckyNumber + ", giving you a 100% discount! Your old total used to be: $" + totalAmount + " now you pay: $" + (parseInt(totalAmount) - (parseInt(totalAmount))));
    } else {
        alert("We dont seem to have enough information.");
    }
}

calculateTotal(luckyNumber);