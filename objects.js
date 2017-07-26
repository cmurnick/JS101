// how to define an object

var x = "humidity";

var weather = {
	currentTemp: 82,  //key is before : and 82 is the Value
	isRaining: false,
	humidity: "too much",
	'is-sunny': true
};

console.log(weather);

weather.location = "Nashville";  /// asigning a property to an opject
weather['zipCode'] = 37212;  // aother way t assigna property to an object

console.log(weather);

console.log(weather.isRaining);
console.log(weather['is-sunny']);
console.log("humidity", weather[x]); // the x refers to the var x above then to find the humidity in the object and take the value
console.log(weather.x); // this won't work.



