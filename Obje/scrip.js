//The method you used is called an object literal.
 //In JavaScript, an object literal is a way to define an object directly using curly braces {}
//This method allows you to create an object 
//and define its properties and methods in a straightforward manner.

// let member = {
//     name: 'Enas',
//     age: 28,
//     country: 'Jordan',
//     fullDetails: function() {
//         return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
//     }
// };

// console.log(member.name); 
// console.log(member.age); 
// console.log(member.country); 
// console.log(member.fullDetails()); 





//########################/ the Second Method is class method #############################################################



// in JavaScript. Specifically, it's a method defined within a class that can be called on instances of that class. 
//In your example, the fullDetails method is a class method of the Member class. Here's a breakdown:
// Class: Member
// Constructor: Initializes the properties name, age, and country.
// Class Method: fullDetails(), which returns a string with the member's details.
/////
//  class Member {
//      constructor(name, age, country) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//    }

//      fullDetails() {
//          return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
//     }
//  }

//  const member = new Member('Enas', 28, 'Jordan');

//  console.log(member.name); 
//  console.log(member.age); 
//  console.log(member.country); 
//  console.log(member.fullDetails()); 


//#######################  The Third method : Object.create()##############################################


// let memberPrototype = {
//     fullDetails: function() {
//         return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;//إنشاء نموذج (Prototype):
//     }
// };

// let member = Object.create(memberPrototype);
// member.name = 'Enas';
// member.age = 28;
// member.country = 'Jordan'; //إنشاء الكائن باستخدام Object.create():

// console.log(member.name); 
// console.log(member.age); 
// console.log(member.country); 
// console.log(member.fullDetails()); 
        


      //####################  //The fourth method : Object.assign()     ##################################################

// let member = {};    // creat epmty object

// Object.assign(member, {
//     name: 'Enas',
//     age: 28,
//     country: 'Jordan',
//     fullDetails: function() {
//     return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
//     }
// });

// console.log(member.name); 
// console.log(member.age); 
// console.log(member.country); 
// console.log(member.fullDetails()); 

//#########################################//

//The for...in loop in JavaScript is used 
//to iterate over the properties of an object. It allows you to loop through all enumerable properties of an object. Here's an example using the member object we discussed earlier:
// let member = {
//     name: 'Enas',
//     age: 28,
//     country: 'Jordan',
     
// };


// for (let key in member) {
//     console.log(`${key}: ${member[key]}`);

// }

 

//n this example, the for...in loop iterates over each property
// in the member object and logs the property name (key) and its value (member[key]) to the console. 


//freeze 
//In JavaScript, Object.freeze() is a method that prevents modification of existing properties and prevents new properties from being added to an object. Here's how it works, along with some related methods
//  let member = {
//      name: 'Enas',
//      age: 28,
//      country: 'Jordan'
//  };

//  Object.freeze(member);

//  member.age = 40; // This will not change the age property
// member.newProperty = 'new'; // This will not add a new property

// console.log(member.age); // 28
// console.log(member.newProperty); // undefined

//############################# ####################################
// Object.defineProperty(): Object.defineProperty() يسمح لك بتعريف أو تعديل خاصية في كائن والتحكم في سماتها.
// let member = {};
// Object.defineProperty(member, 'name', {
//     value: 'Enas',
//     writable: false, // لا يمكن تعديل القيمة
//     enumerable: true, // يمكن تعداد الخاصية في الحلقات
//     configurable: false // لا يمكن حذف الخاصية أو تعديل سماتها
// });

// console.log(member.name); // Enas
// member.name = 'Ahmed'; // لن يتم تغيير القيمة
// console.log(member.name); // Enas


//Object.getOwnPropertyDescriptor(): Object.getOwnPropertyDescriptor() يعيد واصف الخاصية لكائن معين.


// let descriptor = Object.getOwnPropertyDescriptor(member, 'name');
// console.log(descriptor);
// { value: 'Enas', writable: false, enumerable: true, configurable: false }


//Object.keys(): Object.keys() يعيد مصفوفة تحتوي على أسماء الخصائص القابلة للتعداد لكائن معين.


// let keys = Object.keys(member);
// console.log(keys); // ['name']



//Object.values(): Object.values() يعيد مصفوفة تحتوي على قيم الخصائص القابلة للتعداد لكائن معين.


// let values = Object.values(member);
// console.log(values); // ['Enas']


//Object.entries(): Object.entries() يعيد مصفوفة تحتوي على أزواج [الخاصية، القيمة] لكل خاصية قابلة للتعداد في كائن معين.

// let entries = Object.entries(member);
// console.log(entries); // [['name', 'Enas']]


////task1

const person = { name: "Adam", age: 25, gender: "male" };
console.log(person.name, person.age, person.gender);


//task2
{const person = { name: "Adam", age: 25 };
person.gender = "male";
console.log(person);
}





//task3

{const person = { name: "Adam", age: 25 };
person["gender"] = "male";
console.log(person);
}




//task4
{const person = { name: "Adam", age: 25 };
console.log(person.name);
}

//task5
{
    const person = { name: "Adam", age: 25 };
    console.log(person["name"]);
    
}
 //task6
 {
    const person = { name: "Adam", age: 25, gender: "male" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

 }

 //task7
 {const person = { name: "Adam", age: 25, gender: "male" };
 console.log(Object.keys(person));
 
 }

 //task8

 {const person = { name: "Adam", age: 25, gender: "male" };
console.log(Object.values(person));}


//task9


{
const person = { name: "Adam", age: 25, gender: "male" };
console.log(Object.entries(person));

}





//task10

{
const person1 = { name: "Adam", age: 25 };
const person2 = { gender: "male" };
const merged = Object.assign({}, person1, person2);
console.log(merged);

}



//task11

{
 const person = Object.freeze({ name: "Adam", age: 25 });
 person.age = 30;
 console.log(person);
      
}



//task12
{const person = Object.seal({ name: "Adam", age: 25 });
person.age = 30;
console.log(person);

}








