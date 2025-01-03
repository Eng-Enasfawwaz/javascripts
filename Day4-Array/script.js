//Basic
//task1

const arr = [1, 2, 3, 4, 5];
console.log(arr.length); 


//task2
{
const arr = [1, 2, 3, 4, 5];
for (const index in arr) {
    console.log(index);
}
}


//task3
{
    const arr = [1, 2, 3, 4, 5];
for (const index in arr) {
    console.log(index);
}

}



//task4
{
    const arr = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr)); // Output: true

}


//task5
{
    const obj = {0: "a", 1: "b", 2: "c", length: 3};
    console.log(Array.from(obj));
    
}






//task6
{
    const arr = [1, 2, 3, 4, 5];
    arr.forEach(Number => console.log(Number));
    
}






//Mid


//task1
{
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    console.log(arr1.concat(arr2)); // Output: [1, 2, 3, 4, 5, 6]
    
}







//task2
{
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.indexOf(3)); // Output: 2
    
}







//task3
{
    const arr = [1, 2, 3, 4, 5, 6];
    console.log(arr.slice(2, 4)); // Output: [3, 4]
    
}









//task 4
{
    const arr = [1, 2, 3, 4, 5];
arr.splice(3, 1); // Removes 4
console.log(arr); // Output: [1, 2, 3, 5]

    
}








//task 5
{
const arr = [1, 2, 3, 4, 5];
console.log(arr.join(", ")); // Output: "1, 2, 3, 4, 5"
    
}








//task6
{
const str = "1,2,3,4,5";
console.log(str.split(",")); // Output: [1, 2, 3, 4, 5]
    
}









//task7
{
console.log(Array.of(1, 2, 3)); // Output: [1, 2, 3]

}







//task8
{
const arr = [1, 2, 3, 4, 5];
console.log(arr.fill(0, 0, 3)); // Output: [0, 0, 0, 4, 5]
}    





//task9
{const arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(1, 3)); // Output: [1, 4, 5, 4, 5]
}









//task10

{const arr = ["apple", "banana", "cherry"];
console.log(arr.sort()); // Output: ["apple", "banana", "cherry"]
}










//task11
{
const arr = ["apple", "banana", "cherry"];
console.log(arr.reverse()); // Output: ["cherry", "banana", "apple"]
}



//##########################################################

//Advanced


//task1


{
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(num => num ** 2)); // Output: [1, 4, 9, 16, 25]
    
}



//task2

{
const arr = [1, 2, 3, 4, 5];
console.log(arr.filter(num => num % 2 === 0)); // Output: [2, 4]

}




//task3
{
const arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((sum, num) => sum + num, 0)); // Output: 15
    
}