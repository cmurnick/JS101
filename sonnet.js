var sonnet = document.getElementById("sonnet");
console.log(sonnet);
var jsString = sonnet.innerHTML;

console.log(jsString.indexOf("orphans"));
console.log(jsString.length); 
console.log(jsString.replace("winter", "yuletide"));
	jsString=jsString.replace("winter", "yuletide");
console.log(jsString.replace(/the/g, "a large"));
	jsString=jsString.replace(/the/g, "a large");
document.getElementById("sonnet").innerHTML = jsString

var sonnetString = document.getElementByID("sonnet").innerHTML;

console.log("index of 'orphans'", sonnetString.indexOf("orphans"))
console.log()