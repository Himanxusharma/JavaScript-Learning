// //Constructors and this keyword

// const John= {
//   name: "John",
//   age: 50,
// };

// console.log(John);

// function Person(name,age){
//     this.name= name;
//     this.age = age;
//     console.log(this);
// }

// const Peter = new Person("Peter",18)
// const Alan = new Person("Alan",28)
// const Jack = new Person("Jack Sparrow",37)
// console.log(Person);

// const name1 = "John";
// const name2 = new String("Smith");

// name2.age = 50;

// console.log(name1, typeof name1);
// console.log(name2, typeof name2);

// if(name2 === "Smith"){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }

// const num1 = 5;
// const num2 = new Number(5);

// console.log(num1, typeof num1);
// console.log(num2, typeof num2);

// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(bool1, typeof bool1);
// console.log(bool2, typeof bool2);

// const getSum1 = function(x,y){
//     return x+y;
// }

// console.log(getSum1(1,1));

// const getSum2 = new Function('x','y','return 1+1');

// console.log(getSum2(1,1));

// const john1 = {name: "John"};
// const john2 = new Object({name: "John"});
// console.log(john1, typeof john1);
// console.log(john2, typeof john2);

// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// console.log(arr1, typeof arr1);
// console.log(arr2, typeof arr2);

// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re1, typeof re1);
// console.log(re2, typeof re2);


// //Prototypes

// function Person(firstName,lastName,dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function(){
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
// }

// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
// }

// const john = new Person("John","Doe","8-12-1990");
// const mary = new Person("Mary","Johnson","March 20 1978");

// console.log(mary);
// console.log(john.calculateAge());
// console.log(mary.getFullName());
// mary.getsMarried("Smith");
// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty("firstName"));
// console.log(mary.hasOwnProperty("getFullName"));

// //Prototypal Inheritance



 
