var message = "in global";
console.log("global: message = " + message);

var a = function () {
  var message = "inside a";
  var message = "inside a2";
  console.log("a: message = " + message);

   

  function b () {
    console.log("b: message = " + message); 
  }
b();
} 

a();
// should be undefined
var x;
console.log(x);

if (x == undefined) {
  console.log("x is undefined");
}

x = 5;
if (x == undefined) {
  console.log("x is undefined");
}
else {
  console.log("x has been defined");
}

// ***** String concatination
var string = "Hello";
// string += " World";
string = string + " World";
console.log(string + "!");




// ***** Regular math operators: +, -, *, /
console.log((5 + 4) / 3);
console.log(undefined / 5);
function test1 (a) {
  console.log( a / 5);
}
test1();




// ***** Equality 
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
  console.log("x='4' is equal to y=4");
}





// ***** Strict equality
if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console
  .log("Strict: x='4' is NOT equal to y=4");
}






// ***** If statement (all false)
if ( false || null || 
     undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log ("All false");
}

// ***** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}





// ***** Best practice for {} style
// Curly brace on the same or next line...
// Is it just a style?
function a() 
{
  return         //3aml da w rg3 beha
  { 
    name: "Yaakov"
  };
}

function b() {
  return {                     
      name: "Yaakov"
  };
}

console.log(a());
console.log(b());


// For loop
var sum = 0;
for (var i = 0; i < 3; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);


// Default values
function orderChickenWith(sideDish) {
  sideDish = sideDish || "whatever!";   //3shan lw user b3t nan  bea5od what ever
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}
console.log("**************************************************")

// Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO name is: " 
  + company.ceo.firstName);

console.log(company["name"]);

var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("Stock price is: " + 
  company[stockPropName]);

// Better way: object literal
var facebook = {
  name: "Facebook",
  ceo: {
    firstName: "Mark",
    favColor: "blue"
  },
  "stock of company": 110
};

console.log(facebook.ceo.firstName);

console.log("**************************************************")

// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
  return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply);


// Function factory
function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };

  return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));



// Passing functions as arguments
function doOperationOn(x, operation) {
  return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);

console.log("********************************************")
  
// Copy by Reference vs by Value
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);


var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update:");
console.log(a);
console.log(b);






// Pass by reference vs by value
function changePrimitive(primValue) {
  console.log("in changePrimitive...");
  console.log("before:");
  console.log(primValue);
  
  primValue = 5;
  console.log("after:");
  console.log(primValue);
}

var value = 7;
changePrimitive(value); // primValue = value
console.log("after changePrimitive, orig value:");
console.log(value);



function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);
  
  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x: 7 };
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);

console.log("***************************************")



// Function constructors
function Circle (radius) {
  this.radius = radius;
  
}

Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };


var myCircle = new Circle(10);  //m7foza k function msh ze el tane k objrct
console.log(myCircle);

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);


console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
 // Object literals and "this"
var literalCircle = {
		  radius: 10,

		  getArea: function () {
				    var self = this;
				    console.log(this);

				    var increaseRadius = function () {
				      		self.radius = 20;};
				    increaseRadius();


				    console.log(this.radius);

				    return Math.PI * Math.pow(this.radius, 2);
				    
		  }

};

console.log(literalCircle.getArea());


console.log("******************************************************")

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");

max.bark();
console.log("******************************************************")


// Arrays
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);


// Short hand array creation
var names = ["Yaakov", "John", "Joe"];
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}


var names2 = ["Yaakov", "John", "Joe"];

var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS",
  platform: "Courera"
};
for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
}

console.log("******************************************************")

for (var name in names2) {
  console.log("Hello " + names2[name]);
}

names2.greeting = "Hi!";

for (var name in names2) {
  console.log("Hello " + names2[name]);
}


console.log(names2)

console.log("******************************************************")

// Closures
function makeMultiplier (multiplier) {
  // var multiplier = 2;
  function b() {
    console.log("Multiplier is: " + multiplier);
  }
  b();


  return (
      function (x) {
        return multiplier * x;
      }

    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10)); // its own exec env

console.log("******************************************************")


var names=["Joe","marina","maher"];
for (var name in names){
	if (true) {
		console.log("Goodbye" + name);
	}
	else{
		console.log("Hello" + name);
	}
}

