// task1

let age = 28; 

if (age > 18) {
    console.log("You are an adult");
}


// task2
let score = 15;  

if (score <= 50) {
    console.log("You failed the test");
}



// task3

let name = "Enasfawwaz";  

if (name === "Enasfawwaz") {
    console.log("Hello, Enasfawwaz");
}



// task4


let day = "friday";  // Example value

if (day !== "Saturday" && day !== "Sunday") {
    console.log("It's a weekday");
}



// task5

let num = 8;  // Example value

if (num % 2 === 0) {
    console.log("The number is even");
}



// task6

let char = ("q");


if ((char)) {
    console.log("It's a letter");  
} else {
    console.log("It's not a letter");  
}

// task7



let list = [8, 2, 7,6];  


if (Array.isArray(list)) {
    console.log("It's an array");  // If it's an array
} else {
    console.log("It's not an array");  // If it's not an array
}


// task8


let x = 90;  

if (x > 0) {
    console.log("x is a positive number");  
} else {
    console.log("x is not a positive number");  
}

// task9
let y = -90;  

if (y>0) {
    console.log("y is a positive number");  
} else {
    console.log("y is a negative number");  
}


// task10

let z = 9;  


if (z % 3 === 0) {
    console.log("z is a multiple of 3");  
} else {
    console.log("z is not a multiple of 3");  
}


// task11

let GPA = 'A';  


switch (GPA.toUpperCase()) {
    case 'A':
        console.log("Excellent");  
        break;
    case 'B':
        console.log("Very Good");  
        break;
    case 'C':
        console.log("Good");  
        break;
    case 'F':
        console.log("Failed"); 
        break;
 
}




// task12

let month = "January"; // Input month

switch (month.toLowerCase()) {
    case "december":
    case "january":
    case "february":
        console.log(`${month} is a winter month`);
        break;
    case "march":
    case "april":
    case "may":
        console.log(`${month} is a spring month`);
        break;
    case "june":
    case "july":
    case "august":
        console.log(`${month} is a summer month`);
        break;
    case "september":
    case "october":
    case "november":
        console.log(`${month} is an autumn month`);
        break;
    default:
        console.log("Invalid month");
    
}

//################# task13###########################################
let password = "mypassword586"; // Input password

if (password.length >= 8) {
    console.log("Your password is strong");
} else {
    console.log("Your password is too short");
}

//#################### task14####################################################

// const adminEmail = "enasfawwaz@gmail.com";
// const adminPassword = "enas@1996";
// let enteredEmail = prompt("Enter your email:");
// let enteredPassword = prompt("Enter your password:");


// if (enteredEmail !== adminEmail) {
//     alert("Incorrect email");
// } else if (enteredPassword !== adminPassword) {
//     alert("Incorrect password");
// } else {
//     alert("Welcome");
// }

//######################################### task15#####################################
function isNumber(input) {
    // Check if the input is NOT NaN (Not a Number)
    if (!isNaN(input)) {
        console.log(input + " is a valid number");
    } else {
        console.log(input + " is not a number");
    }
}

isNumber(11);        
isNumber("19");      
isNumber("xyz");     
isNumber("17.5");    
isNumber(true);      
isNumber("Hello");   
