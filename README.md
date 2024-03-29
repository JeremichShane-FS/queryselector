# Queryselector

You can find the deployed project at [Queryselector](http://jeremichshane-fs.github.io/queryselector)
 
## Overview

For this assignment, you will be solving 2 different problems in the same HTML & JS files.  You will be using the querySelector to select HTML elements and give the user better-looking feedback.

> **The Challenge**

Successful completion of this activity will show that you can do the following:

- Select HTML elements based on classes & ids.
- Change the text and properties of HTML elements.
- Employ buttons to give the user interactivity.
- Utilize String Interpolation to include variables inside of strings.


## **Problem #1** – Discount Double-Check

In this problem, you will be prompting the user for the price of 2 items bought at a store and give them a discount based on their total.
Create an h1 header for this section. Remember you can use <br> if you need a break on your page to help the overall look.

You are going to purchase (2) items from an online store.
If you spend exactly $100 or more, you will get a 10% discount on your total purchase.
If you spend between exactly $50 and up to but not including $100, you will get a 5% discount on your total purchase.
If you spend less than $50, you will get no discount.

You should prompt the user for the values using the prompt command.

Final results must be in an HTML element.

If the user DOES get a discount make the background of the results Green.

If the user DOES NOT get a discount make the background of the results Yellow.

User Inputs:
Cost of First Item (in $)
Cost of Second Item (in $)
Result To Print Out:
If they get no discount:  “Your total purchase is $X.”
Where X is the total of the 2 items. Make sure to round the cost to 2 decimal places!
Or if they do get a discount: “Your total purchase is $X, which includes your Y% discount.”
Where X is the total of the 2 items. Make sure to round the cost to 2 decimal places!
Where Y is the discount they receive.
Data Sets To Test – Try these values in your program and make sure you get the same results shown here!

Test 1:
User Input
First Item Cost - $ 45.50
Second Item Cost - $75.00
Total - $108.45
Results Shown On The HTML Page
“Your total purchase is $108.45, which includes your 10% discount.”
The background color of the element should be Green
Test 2:
User Input
First Item Cost - $ 30.00
Second Item Cost - $25.00
Total - $52.25
Results Shown On The HTML Page
“Your total purchase is $52.25, which includes your 5% discount.”
The background color of the element should be Green
Test 3:
User Input
First Item Cost - $ 5.75
Second Item Cost - $12.50
Total - $18.25
Results Shown On The HTML Page
“Your total purchase is $18.25.”
The background color of the element should be Yellow


## **Problem #2** – Last Gas Station For Miles
In this program, we will determine if a driver can make it across the desert with their current fuel or if they should stop at the gas station before making the 200-mile trek. 


Create an h1 header for this section. Remember you can use <br> if you need a break on your page to help the overall look.

 Prompt the user for the number of gallons of gas their car can hold, the % of gas they have left, and the miles per gallon their car can get.

Calculate the number of miles their car can go with the current amount of gas in their tank.

If they can go 200 or more miles, then they do not have to stop.

If they can go under 200 miles, they must stop and get gas, so they don't end up stranded in the desert.

For the final results, create an h1 tag and 1 and only 1 img tag in your HTML.

Your JS code should change the src of the img tag to the correct image for the results.

The final results should not immediately be shown on the HTML.  

Instead, create 2 buttons. Note: The user should be able to click either button or show both versions.

Show Text Answer
When clicked, this will fill in the text of an HTML document and set its visibility to show on the HTML.
Show Graphic Answer
When clicked, this will change the image source to the correct file and set its visibility to show on the HTML.


User Inputs:

What is the maximum number of gallons your car tank holds?
How full is your gas tank? (in %)
How many miles per gallon does your car get?
Result For Text Answer:

If they DO have enough gas: “Yes, you can drive X miles and you can make it without stopping for gas!” 
Where X is the number of miles the car can go on the current amount of gas.
If they DO NOT have enough gas: “You can only drive X miles more, better get gas now while you can!”
Where X is the number of miles the car can go on the current amount of gas.
Result For Graphic Answer:

If they DO have enough gas:  Set the image source to the "Enough Gas" picture and make it visible on the page.
If they DO NOT have enough gas: Set the image source to the "Not Enough Gas" picture and make it visible on the page.

Data Sets To Test – Try these values in your program and make sure you get the same results shown here!

Test 1:
User Input
Gallons -20 gallons
Gas Tank = 50% full, 
MPG- 25 Miles Per Gallon
Result For Text Answer:
“Yes, you can drive 250 miles and you can make it without stopping for gas!”
Result For Graphic Answer:
Set the image source to the "Enough Gas" picture and make it visible on the page.
Test 2:
User Input
Gallons -12 gallons
Gas Tank = 60% full,
MPG- 20 Miles Per Gallon
Result For Text Answer:
“You can only drive 144 miles more, better get gas now while you can!”
Result For Graphic Answer:
Set the image source to the "Not Enough Gas" picture and make it visible on the page.

![Landing Page](/images/queryselector.png)

<br>

## Contributors

|                                        [Shane Jeremich](https://github.com/shanejeremich)                                        |
| :----------------------------------------------------------------------------------------------------------------------------: |
|                         [<img src="https://avatars.githubusercontent.com/u/51142646?v=4" width = "200" />](https://github.com/shanejeremich)                         |
|                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/shanejeremich)                    |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/shanejeremich/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?&logo=css3&logoColor=white)

## Key Features

- HTML / CSS / Javascript

### Front end deployed to `GitHub Pages`

> [Queryselector](http://jeremichshane-fs.github.io/queryselector)

# Getting Started

- Fork and clone the repo to install it as your own remote.
- Set up the project with version control (e.g. Git)
- Read the README.md file and have a look around the project
- Set up your project/file architecture however you want
- Start coding!!
