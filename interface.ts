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

class Vehicle {
    cName : string
    price : number

    constructor(cName : string, price: number){
        this.cName = cName
        this.price = price
    }
}

let v1 = new Vehicle("honda", 30000)
let v2 = new Vehicle("toyota", 34000)


class Fruits{
    constructor(public name:string, public price:number){
        this.name = name
        this.price = price
    }
}

let f1 = new Fruits("Apple", 300)
let f2 = new Fruits("Mango", 200)
let f3 = new Fruits("Orange", 500)

// Access modifier

// public
class User{
    name = "Amir"
    age = 22
    gender = "male"
  
}
// private
class AnotherUser{
    name = "Amir"
    age = 22
    gender = "male"
   private email = "test@gmail.com"
   private password = 123445

}
// protected

class AnotherUser2{
    name = "Amir"
   protected age = 22
    gender = "male"
    email = "test@gmail.com"
    password = 123445

}

