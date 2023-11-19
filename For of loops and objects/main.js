// لا يمكن التنفيذ الحلقة بشكل مباشر على الكائن
// const car = {
//   speed: 100,
//   color: "blue"
// }

// for(prop of car) {
//   console.log(prop)
// }

// Uncaught TypeError: car is not iterable

// استخدام الحلقة لطباعة عناصر المصفوفة 
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
console.log("------------------");

// Object.keys() لطباعة مفتاح الكائن نستخدم 
const car2 = {
  speed: 200,
  color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
console.log("------------------");

// Object.values() لطباعة قيم الكائن نستخدم 
const car3 = {
  speed: 300,
  color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
console.log("------------------");

// Object.entries() لطباعة قيم ومفاتيح الكائن نستخدم 
const car4 = {
  speed: 400,
  color: 'magenta'
}
console.log(Object.entries(car4));
console.log("------------------");

// لديك الآن جميع المكونات التي تحتاجها للتكرار على مفاتيح وقيم الخصائص الخاصة بأي كائن
var clothingItem = {
  price: 50,
  color: 'beige',
  material: 'cotton',
  season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
  console.log(key, ":", clothingItem[key])
}
console.log("------------------");

// الغرض منه هو توضيح حقيقة أنك تحصل على قيمة واحدة أو أخرى من مفتاح الكائن، استنادًا إلى السلسلة التي تم تعيينها لمتغير المفتاح الديناميكي
function testBracketsDynamicAccess() {
  var dynamicKey;
  if(Math.random() > 0.5) {
    dynamicKey = "speed";
   }else{
     dynamicKey = "color";
   }

    var drone = {
      speed: 15,
      color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
console.log("------------------");

const car5 = {
  engine: true,
  speed: 400,
  color: 'magenta'
}
const sportCar = Object.create(car5);
//sportCar {}  عند عدم وضع الكود التالي يكون الكائن فارغ 
sportCar.speed = "fast";
console.log(sportCar);
console.log("------------------");

//for in تستخدم لطباعة المفتاح أيضا في المصفوفة تقوم بطباعة الانديكس
for(c in sportCar){
  console.log(c);
}
console.log("------------------");

//for of  تستخدم لطباعة المفتاح و القيمة حسب المطلوب
for(c of Object.keys(sportCar)){
  console.log(sportCar[c]);
}
console.log("------------------");

for(c of Object.keys(car5)){
  console.log(c +": "+ car5[c]);
}
console.log("------------------");

for(c of Object.values(car5)){
  console.log(c);
}