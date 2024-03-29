const bikes = ["Honda", "Ducati", "Halley", "Suzuki"];
console.log(bikes);
console.log(bikes.toString());  //converts array to string
console.log(bikes.at(1));      //returns element at index 1
console.log(bikes.join("*"));    //joins all elements of the array with a specified character
console.log(bikes.pop());        //removes and returns last element in an array
console.log(bikes.push("Aprillia"));    //adds one or more elements to the end of an array and returns new length
console.log(bikes);              //prints updated array after push()
console.log(bikes.shift());        //removes and returns first element from an array
console.log(bikes);                 //prints updated array after shift()
console.log(bikes.unshift("BMW")); //adds new element to beginning of an array
console.log(bikes);                //prints updated array after unshift()
console.log(bikes[2]);                          //accessing element using indexing
console.log(bikes[2] = "Honda");      //changes value of specific element
console.log(bikes);                               //prints updated array after changing value
console.log(bikes[bikes.length] = "Kawasaki");   //adding new element to end of array
console.log(bikes);                                            //prints updated array
// console.log(delete bikes[3]);              //deletes element by its index //Leaves undefined holes in the array //Use pop()/shift() instead
// console.log(bikes);                                             //prints updated array


const cars = ["Porsche", "Suzuki", "Audi", "Ford", "Mercedes"];
const planes =["Boeing", "Bombardier", "Embraer", "Airbus"];
console.log(cars);
console.log(bikes);
let fleet = bikes.concat(cars);     //creates a new array by merging two arrays
let fleet1 = bikes.concat(cars, planes); //Can take any number of arg's // Can take strings as arg's too
const myPlanes = planes.concat("Cessna"); // Can also merge array with values
console.log(fleet);
console.log(fleet1);
console.log(myPlanes);
console.log(fleet1.join(", "));       //Converting array into string but adds specified separator
console.log(fleet1);
console.log(fleet1.copyWithin(3, 0));  //copies part of array to another starting position
console.log(fleet1.copyWithin(2, 0, 5));

const arr = [[1, 2], [3, 4],  [5, 6, 7]];
const newArr = arr.flat();            //flattens nested arrays upto depth provided
console.log(newArr);

const companyEmployee = ["William", "Joseph", "Mike", "Joan", "Jane"];
console.log(companyEmployee);
console.log(companyEmployee.splice(2, 0, "John", "Lydia"));      //Returns empty array if no arguments are passed
// console.log(employees);

const months = [["Jan", "Feb", "Mar"], ["April", "May"], ["Oct", "Dec"]];
months.splice(2, 0, "June", "July"); //Inserts elements at a particular index in array
console.log(months);         //After splicing

//ARRAY FINDS AND SEARCH METHOD
const fruits = ['apple', 'banana', 'cherry', 'date', 'avocado','cherry'];
const num = [9,8,7,6,5,4,6,3,2,1];
//----
console.log(num.indexOf(6));
//Returns the first occurrence of  an element in an array //3
//If the item is present more than once, it returns the position of the first occurrence //3
console.log(num.indexOf(60));
// If not found, returns -1
console.log(num.lastIndexOf(-6));
//Returns -1 if the item is not found //-1
console.log(fruits.lastIndexOf('cherry'));
// Returns the last occurrence of an element in an array //5
console.log(fruits.includes('grape'));
//Checks whether an array contains a certain value //false
//returns true or false
console.log(fruits.find((item) => item === 'cherry') );
//Returns the value of the first element that satisfies the condition //cherry
console.log(num.find((val) => val === 57));
//If no value satisfies the condition, undefined is returned //undefined



//------------------LOOPS------------------------
const rides = ["Honda", "Volvo", "Jaguar", "Bmw", "Vw", "Audi","Hyundai"];

for (const car of rides) {
  console.log(car);
} //Prints each element one by one using for...of loop
//The variable car takes on the values Honda, Volvo etc., one after another
//Creates a var car that saves each array element
function toUpper(string) {
    return string.toUpperCase();
}
const upperRides = rides.map(toUpper);
console.log(upperRides); //Converts all items in array to uppercase
//Uses map method which applies a function to every item in the array and returns new
function withH(string) {
    return string.startsWith("H");
}
const filtered = upperRides.filter(withH);
console.log(filtered); //Filters out all items that do not start with H
//Use filter() method to create a new array from the existing one but only includes elements that pass a test provided as a function