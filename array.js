console.log("in arrays");

var pokemon = "charmander";

var array = [ 42, "string" , null , "car", {}, pokemon ]

console.log(array [5]);
array[33]  = "apple";

console.log(array.length);

//consold.log(array[35]);


//Array Methods     

console.log(array.indexOf("car"));

array.push("cat");  //adds at end of array
console.log(array);

array.pop(); // removing last index of array
console.log(array);

array.unshift('zoe is cool'); // adds at beginning of array
console.log(array);

array. shift();  // takes out first index of the array
console.log(array);

var newString = array.join("|");  // joins indexes of the array with | between each index
console.log(newString);
console.log(typeof newString); //returns out what type var or object is

newString = newString.split("|"); // splits it back out to array
console.log(array);

var sentence = "http://www.meetup.com/";
console.log(sentence.split("/")); // splits on the / to the array
console.log(sentence.split("")); //splits every character out individually

//---------------

var newArray = ["dog", "cat", "pig", "hippo"];
var numberArray = [3,6,12,55,8];

console.log(newArray.reverse()); // changes array order by reversing it

console.log(newArray.sort()); //sorts on alphabetical order
console.log(numberArray.sort());  //sorts numerical order on the first number

console.log(numberArray.sort(function(first,second){return first - second;})); //number in the index get sorted correctly

console.log(newArray)
newArray.slice(1, 3); // creates a new variable with these indexes starts at index one and stops at 3 so shows 2


console.log(numberArray);
var result = numberArray.splice(3, 1); // 1st number is where removal will start and the second number is how many indexes it will remove to the right
console.log(result);
console.log(numberArray);

console.log(numberArray[0]); // says what index is at 0


///     FOR LOOPS-----------


var newArray = ["dog", "cat", "pig", "hippo"];
for (var i = 0; i < newArray.length; i++) {
	debugger;
	console.log("I'mat index" + i);
	console.log(array [i]); // is goig to find the value in the array at this index.  will be changed as the loop goes through
} //var i is where it is initailized (second) is th condition and th 3rd is the itrator
// ++ part will add 1 to it or i= i+= 1









