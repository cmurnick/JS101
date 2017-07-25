console.log("I'm in second.js");

var perry = "penguin";
var nellie = "owl";
console.log("Perry is a " + perry);

var quote ="our tastes rather than ability. your tastes than only";
//Build in Methods
// indexOf()
// .charAt()
// .replace()

console.log(quote.indexOf("than")); // will give the index of the beginning of the string(first encounter)
console.log(quote.charAt(20)); // will give the character at the specified index
console.log(quote.replace(/than/g, "tired"));

var quote = quote.replace(/than/g, "tired")
document.getElementById("quote").innerHTML = quote;

var element = document.getElementById("secondQuote");
var jsString = element.innerHTML;
console.log(jsString);

