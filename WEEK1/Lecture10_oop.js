        // This is object Literal

let person = {
    firstName: "Rohit",
    lastName: "Thota",

    getFullName: function(){
        return `he name of the person is ${person.firstName} ${person.lastName}`
    },

    phoneNumber: {
        mobile : "12345",
        landline: "6789",
    },
};

console.log(person.getFullName());
console.log(person.phoneNumber.landline);



        // This is object Constructor 


// function person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// let person1 = new person("Rohit", "ramnaik");
// let person2 = new person("sai", "ramnaik");

// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);


//             // object.create{} method

//  const coder = {
//     isStudying: false,
//     printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I studying? ${this.isStudying}`);
//     },
// };
            
// const me = Object.create(coder);
// me.name = "Rohit";
// me.isStudying = true;
// me.printIntroduction();
            

//             // Classes 

// class Vehicle{
//     constructor(name, maker, engine){
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }

//     getDetails(){
//         return `The name of the vehicle is ${this.name}`;
//     }
// }

// let v1 = new Vehicle("creta", "Hyundai", "2500cc");
// let v2 = new Vehicle("Q5", "audi", "3000cc");

// console.log(v1.name)
// console.log(v2.maker)
// console.log(v1.getDetails())


//             // function

// function Vehicle(name, maker, engine){
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
//     }

//     Vehicle.prototype.getDetails = function(){
//         return `The name of the vehicle is ${this.name}`;
//     };

// let v1 = new Vehicle("creta", "Hyundai", "2500cc");
// let v2 = new Vehicle("Q5", "audi", "3000cc");

// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());


//             // Encapsulation

// class Person {
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//     }

//     addAddress(newAddress){
//         this.address = newAddress;
//     }

//     getDetails(){
//         console.log(`Name is: ${this.name}, and address is: ${this.address}`);
//     }
// }

// let person1 = new Person("likith ram naik",20);
// person1.addAddress("Tirupati");
// person1.getDetails();


