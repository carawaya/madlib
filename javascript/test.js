// var first_name = "andrew"; two forward slashes mean a single line comment
// var last_name = "caraway";

/*
block 
comment
*/


/*var greeting = "hello!";
var first_name = "Andrew";
var last_name = "Caraway";
var message1 = "don't forget to pick up these items";
var message2 = "also, make sure to gather wood";
var favoriteQuote = "\"Four Score...\"";
var my_image = "<img src=\"images/myImage.png\"/>";
// var my_image = "<img src='images/myImage.png'>"; ALSO VALID best practice is \"
var goodbye = "see you later"; */


// BAD variable names (errors!!!!) when yo mama         

/*operators 
"=" assigns values
"+=" (concatenation assignment operator, with string) adds to whatever the variable currently has
*/

//output variables to the console!!!!!

/*console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favoriteQuote);
console.log(goodbye); */

//console.log(greeting + " " + first_name + " " + last_name + " " + message1 + " " + message2 + " " + favoriteQuote + " " + goodbye);


//"We cannot permit the *extreme* in the *environmental* movement to *shut* down the *United States*. We cannot shut down the *lives* of many *Americans* by going to the extreme on the environment." 
// - George Bush

var static_words1 = " extreme ";
var static_words2 = " environmental ";
var static_words3 = " shut ";
var static_words4 = " United States ";
var static_words5 = " lives ";
var static_words6 = " Americans ";

var button = document.getElementById("submit");

button.addEventListener("click", onClick, false);

function onClick(evt)
{
    evt.preventDefault(evt);
  
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  var element6 = document.getElementById("form1").elements.item(5).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5 + static_words6 + element6);
}