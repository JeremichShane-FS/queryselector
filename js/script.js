// Shane Jeremich
// November 8th, 2023
// Code Excercise 05: QuerySelector

alert(
  `In this excercise, you will have two problems to solve.  The first problem will be to calculate the total cost of two items you wish to purchase.  The second problem will be to calculate the number of miles your car can go with the current amount of gas in your tank.  Results will be displayed in the HTML document.  `
);

// *** Problem #1: Discount Double Check ***
// You are going to purchase (2) items from an online store.
// If you spend exactly $100 or more, you will get a 10% discount on your total purchase.
// If you spend between exactly $50 and up to but not including $100, you will get a 5% discount on your total purchase.
// If you spend less than $50, you will get no discount.

alert(
  `Problem #1: Discount Double Check
Welcome to our online store! We're thrilled to have you here. 🎉

Enjoy our exclusive discounts:
- Spend $100 or more, and get a 10% discount!
- Spend between $50 and $100, and enjoy a 5% discount!
- If you spend less than $50, no worries, you'll find amazing deals throughout our store. Happy shopping!
`
);

alert("You will be prompted to enter the cost of two items you wish to purchase. Please enter the cost of each item in the following prompts.");

// We declare the function validateInput() so we can use it throughout the program.
function validateInput(input) {
  if (!isNaN(input) && input > 0) {
    return true;
  } else {
    alert(`You entered an invalid value. Please try again.`);
    return false;
  }
}

// We declare the variables item1, item2, total, and discount so we can use them throughout the program.
let item1, item2, total, discount;

// * User Inputs:
// Cost of First Item (in $)
// Cost of Second Item (in $)

// function calculateTotal() is used to calculate the total cost of the two items the user wishes to purchase.
// Inside the function, we use a nested function called validateInput() to validate the user's input.
// If the user's input is valid, we return true and continue with the function.
// If the user's input is invalid, we return false and exit the function.
// If the user's input is valid, we calculate the total cost of the two items.
// If the total cost is greater than or equal to $100, we apply a 10% discount.
// If the total cost is greater than or equal to $50, we apply a 5% discount.
// If the total cost is less than $50, we do not apply a discount.

function calculateTotal() {
  item1 = parseFloat(prompt(`Enter the cost of your first item. Please enter a number greater than 0.`));
  if (!validateInput(item1)) return;

  item2 = parseFloat(prompt(`Enter the cost of your second item. Please enter a number greater than 0.`));
  if (!validateInput(item2)) return;

  let sum = item1 + item2;
  total = sum;

  if (sum >= 100) {
    total = sum * 0.9;
    discount = 10;
  } else if (sum >= 50) {
    total = sum * 0.95;
    discount = 5;
  }
}

// We call the function calculateTotal() to begin the program.
calculateTotal();

const item1ID = document.querySelector("#item1"),
  item2ID = document.querySelector("#item2"),
  resultID = document.querySelector("#result");

// * Result To Print Out:
// We use innerHTML on item1ID to set the text of the element with the id of "item1" to the cost of the first item.
if (isNaN(item1) || item1 <= 0) {
  item1ID.innerHTML = `You did not enter a valid value for the first item.`;
} else {
  item1ID.innerHTML = `First Item Cost is - $${item1.toFixed(2)}`;
}

// We use innerHTML on item2ID to set the text of the element with the id of "item2" to the cost of the second item.
if (isNaN(item2) || item2 <= 0) {
  item2ID.innerHTML = `You did not enter a valid value for the second item.`;
} else {
  item2ID.innerHTML = `Second Item Cost is - $${item2.toFixed(2)}`;
}

// We then set innerHTML on resultID to the total cost of the two items.
// If the user gets a 10% or 5% discount, we add the discount to the innerHTML.
// If the user gets a 10% or 5% discount, we set the background color of resultID to green.
// If the user gets no discount, we set the background color of resultID to yellow.
// We also set the text color of resultID to black.x
if (isNaN(total) || total <= 0) {
  resultID.innerHTML = `You did not enter a valid value for one or both items.`;
  resultID.style.backgroundColor = "red";
  resultID.style.color = "white";
} else {
  resultID.innerHTML = `Your total purchase is $${total.toFixed(2)}`;

  if (discount === 10 || discount === 5) {
    resultID.innerHTML += `, which includes your ${discount}% discount`;
    resultID.style.backgroundColor = "green";
  } else {
    resultID.style.backgroundColor = "yellow";
    resultID.style.color = "black";
  }
}

// *** Problem #2: Last Gas Station for Miles ***
alert(`Problem #2: Last Gas Station for Miles
You are driving through the desert and you are running low on gas.  You are not sure if you can make it to the next gas station.  You need to calculate the number of miles your car can go with the current amount of gas in your tank.  If you can go 200 or more miles, then you do not have to stop.  If you can go under 200 miles, you must stop and get gas, so you don't end up stranded in the desert.`);
// Prompt the user for the number of gallons of gas their car can hold, the % of gas they have left, and the miles per gallon their car can get.

// Calculate the number of miles their car can go with the current amount of gas in their tank.

// If they can go 200 or more miles, then they do not have to stop.

// If they can go under 200 miles, they must stop and get gas, so they don't end up stranded in the desert.

// For the final results, create an h1 tag and 1 and only 1 img tag in your HTML.

// Your JS code should change the src of the img tag to the correct image for the results.

// The final results should not immediately be shown on the HTML.

// Instead, create 2 buttons. Note: The user should be able to click either button or show both versions.  If they click both buttons, the results should only display the last one clicked.

// * User Inputs:
// What is the maximum number of gallons your car tank holds?
// How full is your gas tank? (in %)
// How many miles per gallon does your car get?

// We declare the variables gallons, percent, mpg, and miles so we can use them throughout the program.
let gallons, percent, mpg, miles;

// function calculateMiles() is used to calculate the number of miles the user's car can go with the current amount of gas in their tank.
// Inside the function, we use a nested function called validateInput() to validate the user's input.
// If the user's input is valid, we return true and continue with the function.
// If the user's input is invalid, we return false and alert the user they entered an invalid value.
// If the user's input is valid, we calculate the number of miles the user's car can go with the current amount of gas in their tank.
// if the user clicks on the button show text answer, we display the text answer.

// Result For Text Answer:
// If they DO have enough gas: “Yes, you can drive X miles and you can make it without stopping for gas!”
// Where X is the number of miles the car can go on the current amount of gas.
// If they DO NOT have enough gas: “You can only drive X miles more, better get gas now while you can!”
// Where X is the number of miles the car can go on the current amount of gas.

// if the user clicks on the button show image answer, we display the image answer.
// Result For Graphic Answer:
// If they DO have enough gas:  Set the image source to the "Enough Gas" picture and make it visible on the page.
// If they DO NOT have enough gas: Set the image source to the "Not Enough Gas" picture and make it visible on the page.

// if the user clicks on one button, then clicks on another button, we hide the first answer and display the second answer.

// We declare the function calculateMiles() so we can use it throughout the program.  The function calculates the number of miles the user's car can go with the current amount of gas in their tank.
// Inside the function, we use a nested function called validateInput() to validate the user's input.  If the user's input is valid, we return true and continue with the function.  If the user's input is invalid, we return false and exit the function.
// If the user's input is valid, we calculate the number of miles the user's car can go with the current amount of gas in their tank.
function calculateMiles() {
  gallons = parseFloat(prompt(`What is the maximum number of gallons your car tank holds?`));
  if (!validateInput(gallons)) return;

  percent = parseFloat(prompt(`How full is your gas tank? (in %)`));
  if (!validateInput(percent)) return;

  mpg = parseFloat(prompt(`How many miles per gallon does your car get?`));
  if (!validateInput(mpg)) return;

  miles = gallons * (percent / 100) * mpg;
}

// We call the function calculateMiles() to begin the program.
calculateMiles();

// We use querySelector() to select the elements with the ids of "textAnswer", "graphicAnswer", "textButton", and "graphicButton".
const textAnswerID = document.querySelector("#textAnswer"),
  graphicAnswerID = document.querySelector("#graphicAnswer"),
  textButtonID = document.querySelector("#textButton"),
  graphicButtonID = document.querySelector("#graphicButton");

// We use addEventListener() to add an event listener to the textButtonID and graphicButtonID.
textButtonID.addEventListener("click", e => displayAnswer(e, textAnswerID, graphicAnswerID));
graphicButtonID.addEventListener("click", e => displayAnswer(e, graphicAnswerID, textAnswerID));

// We declare the function displayAnswer() so we can use it throughout the program.
// The function takes two parameters, displayElement and hideElement.
// The function sets the display of hideElement to "none" and the display of displayElement to "block".
// If the user's input is invalid, we set the innerHTML of displayElement to "You did not enter a valid value for one or more of the inputs."
// If the user's input is valid, and the user clicks on the button show text answer, we set the innerHTML of displayElement to the text answer.
// If the user's input is valid, and the user clicks on the button show image answer, we set the src and alt of displayElement to the image answer.
// If the user clicks on one button, then clicks on another button, we set the display of hideElement to "none" and the display of displayElement to "block".
function displayAnswer(e, displayElement, hideElement) {
  hideElement.style.display = "none";
  displayElement.style.display = "block";

  // We use preventDefault() to prevent the default action of the event from occurring.
  e.preventDefault();

  if (isNaN(miles) || miles <= 0) {
    displayElement.innerHTML = `You did not enter a valid value for one or more of the inputs.`;
    console.log(displayElement.id);
    if (displayElement === graphicAnswerID) {
      textAnswerID.style.display = "block";
      textAnswerID.innerHTML = `You did not enter a valid value for one or more of the inputs.`;
    }
  } else if (miles >= 200) {
    if (displayElement === textAnswerID) {
      displayElement.innerHTML = `Yes, you can drive ${Math.floor(miles)} miles and you can make it without stopping for gas!`;
    } else {
      displayElement.src = `img/enoughGas.jpg`;
      displayElement.alt = `Picture of a car with enough gas`;
    }
  } else {
    if (displayElement === textAnswerID) {
      displayElement.innerHTML = `You can only drive ${Math.floor(miles)} miles more, better get gas now while you can!`;
    } else {
      displayElement.src = `img/notEnoughGas.jpg`;
      displayElement.alt = `Picture of a car with not enough gas`;
    }
  }
}
