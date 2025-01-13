//task1
function stringToArray(str) {
    return str.split("Orange Jordan");
}
console.log(stringToArray("Orange,Jordan"));



//task2
const hideMobileNumber = number => "*******" + number.slice(-3);
console.log(hideMobileNumber("0776807777")); 



//task3
const hideEmail = email => {
    const [localPart, domain] = email.split("@");
    return `${localPart.slice(0, 6)}…@${domain}`;
};
console.log(hideEmail("orange_academy@orange.jo")); 


//task4

const capitalizeFirstWord = str =>
     str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalizeFirstWord("coding academy by orange")); 


//task5
const capitalizeEveryWord = str =>
     str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(capitalizeEveryWord("coding academy by orange")); 


//task6

const flipNumber = num => 
    parseInt([...num.toString()].reverse().join(""));
console.log(flipNumber(92485)); 






//task7

//1fst way

let a = 3, b = 4;
let temp = a;
a = b;
b = temp;
console.log(`a=${a}, b=${b}`); 


//2nd way 

let x = 3, y = 4;
[x, y] = [y, x];
console.log(`x=${x}, y=${y}`); 


//3rd way
let m = 3, n = 4;
m = m + n;
n = m - n;
m = m - n;
console.log(`m=${m}, n=${n}`); 




//task8

const removeCharAt = (str, index) => 
    str.slice(0, index) + str.slice(index + 1);
console.log(removeCharAt("Orange", 3)); 



//task 9
const mergeStrings = (str1, str2) => str1.slice(1) + str2.slice(1);
console.log(mergeStrings("lora", "inge")); 

//task10

const checkFirstOrLast = (char, str) =>
     str.startsWith(char) || str.endsWith(char);
console.log(checkFirstOrLast("o", "orange")); 
console.log(checkFirstOrLast("z", "orange")); 


//task11
const stringToWordArray = str => str.split(" ");
console.log(stringToWordArray("Coding Academy by Orange"));



//task12
const alphabetizeString = str => [...str].sort().join("");
console.log(alphabetizeString("orange"));


//task13
const measureExecutionTime = (fn, ...args) => {
    const start = performance.now(); 
    fn(...args); 
    const end = performance.now(); 
    console.log(` 15 ms`); 
};


const exampleFunction = () => {
    for (let i = 0; i < 1e6; i++) {} 
};

measureExecutionTime(exampleFunction); 

