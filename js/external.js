console.log("Hello, from external JavaScript!");

alert("Welcome to my Website!");

var response = prompt("What is your favorite color?");

alert("Great, " + response + " is my favorite color too!");

var littleMermaid = prompt("How many days did you rent The little Mermaid for?");

var brotherBear = prompt("How many days did you rent Brother Bear for?");

var Hercules = prompt("How many days did you rent Hercules for?");

var totalCost = (Number(littleMermaid) + Number(brotherBear) + Number(Hercules)) * 3;

alert("Your total cost for your rentals is going to be: $" + totalCost);

var googlehours = prompt("How many hours did you work for Google?");

var googlepay = prompt("How much did Google pay you per hour?")

var amazonhours = prompt("How many hours did you work for Amazon?");

var amazonpay = prompt("How much did Amazon pay you per hour?")

var facebookhours = prompt("How many hours did you work for Facebook?");

var facebookpay = prompt("How much did Facebook pay you per hour?")

var totalhours = Number(googlehours) + Number(amazonhours) + Number(facebookhours)

var totalpay = (Number(googlehours) * Number(googlepay)) + (Number(amazonhours) * Number(amazonpay)) + (Number(facebookhours) * Number(facebookpay));

alert("Your total paycheck for " + totalhours + " hours of work is: $" + totalpay);

var isClassFull = false;

var classconflict = false;

var accepted = !isClassFull && !classconflict;

if (accepted){
    alert("You're accepted!")
}

var numberOfItems = prompt("How may items are you purchasing?");

numberOfItems = parseInt(numberOfItems);
var offerIsExpired = false;
var isCustomerPremium = false;

var isOfferValid = (isCustomerPremium && !offerIsExpired) || (numberOfItems >= 2 && !offerIsExpired);

alert("offer is valid :" + isOfferValid);

