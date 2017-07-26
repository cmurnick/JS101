

var colors = "chartreuse, navy, forest green, aqua, purple, frost, emerald, international-rescue orange, seafoam green, firehouse red";


var array = (colors.split(", "));
array.sort();
console.log(array);

for (var  i = 0; i < array.length; i++) {
	console.log("The color at " + i + "is" + array[i]);
}

 


 // create a variable with the string list of colors
 // make the list into an array
 // sort that array alphabetically
 // loop through the array and log to the console the statements: 
 		// "The color at"_index number_ "is"_color name_