// task1
{for (let i = 1; i <= 10; i++) {
    console.log(i);
}}


// task2
{let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
} 
}

// task3
{let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
}


// task4

{
    for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
}


// task5

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);


// task6
{let numbers = [1, 2, 3, 4, 5];
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    console.log(largest);
}





// task7
{

    let numbs = [5, 4, 3, 2, 1];
    let smallest = numbs[0];
    for (let i = 1; i < numbs.length; i++) {
        if (numbs[i] < smallest) {
            smallest = numbs[i];
        }
    }
    console.log(smallest);
    
}




// task8
{
    let numbers = [1, 2, 3, 4, 5];
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    let average = total / numbers.length;
    console.log(average);
}






// task9

{
    {
        let numbers = [5, 4, 3, 2, 1];
        let smallest = numbers[0];
    
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < smallest) {
                smallest = numbers[i];
            }
        }
        console.log(smallest); 
    }
    
}


// task10

{
    {
        let numbers = [1, 2, 3, 4, 5];
        let sum = 0;
    
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        let average = sum / numbers.length;
        console.log(average); 
    }
    
}



// task11
{
    {
        let num = 5;
        let factorial = 1;
    
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        console.log(factorial); 
    }
    
}


// task12
{
    {
        let limit = 20;
    
        for (let num = 2; num <= limit; num++) {
            let isPrime = true;
    
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
    
            if (isPrime) {
                console.log(num);
            }
        }
       
    }
    
}


// task13

{
    {
        let number = 5;
    
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} x ${i} = ${number * i}`);
        }
    }
    
    
}


// task14

{
    {
        let array = [1, 2, 3, 4, 5];
        let step = 2;
    
        for (let i = 0; i < array.length; i += step) {
            console.log(array[i]);
        }
    }
    // Output: 1, 3, 5
    
}




// task15
{
    {
        let array = [1, 2, 3, 4, 5];
    
        for (let i = array.length - 1; i >= 0; i--) {
            console.log(array[i]);
        }
    }
   
}    



// task16
{
    {
        let array = [1, 2, 3, 4, 5];
        let start = 2;
        let end = 4;
    
        for (let i = start; i <= end; i++) {
            console.log(array[i]);
        }
    }
    
    
}


// task17

    {
        let array = [1, 2, 3, 4, 5];
        let target = 4;
        let found = false;
    
        for (let i = 0; i < array.length; i++) {
            if (array[i] === target) {
                found = true;
                break;
            }
        }
    
        console.log(found); 
    }
    





// task18

{
    {
        let array = [1, 2, 1, 3, 2, 1];
        let target = 1;
        let count = 0;
    
        for (let i = 0; i < array.length; i++) {
            if (array[i] === target) {
                count++;
            }
        }
    
        console.log(count); 
    }
    
}



// task19
{
    {
        let limit = 10;
        let a = 0, b = 1;
    
        console.log(a); 
        console.log(b); 
    
        while (b <= limit) {
            let temp = a + b;
            console.log(temp);
            a = b;
            b = temp;
        }
    }
    
    
}



// task20

{
    let limit = 10; 
    let a = 0;
    let b = 1;      

    console.log(a);
    console.log(b); 

    while (b <= limit) {
        let next = a + b; 
        if (next > limit) break; 
        console.log(next);
        a = b;           
        b = next;        
    }
}
