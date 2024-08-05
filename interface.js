// union
// let username : number | string | boolean
// username = 33
// username = "Aamir"
// username = true
// custom types
// type name1 = string
// let a : name1
// a = "hello typescript world"
// type numericVal = number
// let b : numericVal
// b = 333333
// Interface
// interface User{
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }
// function getUser(user : User){
//     user.age = 33
// }
// interface Car{
//     model: string,
//     price: number
// }
// interface Toyota extends Car{
//     carName: string,
//     company: string
// }
// function getCar(car: Toyota){
//     car.carName = "toyota"
//     car.model = "grande"
//     car.price = 4000
// }
// classes
var Vehicle = /** @class */ (function () {
    function Vehicle(cName, price) {
        this.cName = cName;
        this.price = price;
    }
    return Vehicle;
}());
var v1 = new Vehicle("honda", 30000);
var v2 = new Vehicle("toyota", 34000);
var Fruits = /** @class */ (function () {
    function Fruits(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    return Fruits;
}());
var f1 = new Fruits("Apple", 300);
var f2 = new Fruits("Mangi", 200);
var f3 = new Fruits("Orange", 500);
console.log(f1);
console.log(f2);
console.log(f3);
