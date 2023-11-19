/*
  Map
*/

let user = {} // Empty Object
user['username'] = "Osama";
user.website = "Elzero.org";
user["10"] = "String";
user[10] = "Number";

console.log(user);
console.log(user.username);
console.log(user['website']);

let myMap1 = new Map();

myMap1.set("10", "String");
myMap1.set(10, "Number");
myMap1.set(false, "Boolean");
myMap1.set({a: 1, b: 2}, "Object");
myMap1.set(function doSomething() {}, "Function");

console.log(myMap1);

// ###########################
// Another Example Of Setting Properties Inside Map

let myMap2 = new Map([
  ["10", "String"],
  [10, "Number"],
  [false, "Boolean"],
  [{a: 1, b: 2}, "Object"],
  [function doSomething() {}, "Function"]
]);

console.log(myMap2);
console.log("--------------------");

/*
  Set: new Set(Iterable)
*/

let myArray = [1, 2, 3, 3, 4, 4, 2];
let myBooks1 = new Set(myArray); // ليتم إزالة العناصر المكررة  set لتحويل المصفوفة إلى
let myBooks2 = new Set([1, 2, 3, 3, 4, 4, 2]);
let myBooks3 = new Set("1");
// let myBooks2 = new Set(1);

console.log(myBooks1);
console.log(myBooks2);
console.log(myBooks3);
console.log([...myBooks1]); // إلى مصفوفة set لتحويل ال
console.log(myBooks2[1]); // index in set لا نستطيع الوصول إلى العنصر عن طريق 
console.log(myArray[1]);

console.log("--------------------");

// The forEach() method
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

// The filter() method
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

// The map() method
let arr = [0,10,20,30,40,50]
arr.map( function(num) {
  return num / 10
})

// Working with Objects in JavaScript
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)