// Basic
// 1. Smallest value in an array
function findSmallest(arr) {
  return Math.min(...arr);
}
console.log(findSmallest([30, 45, 60, 7])); 



// 2. String in alphabetical order
function AlphabeticalOrder(str) {
  return str.split('').sort().join('');
}
console.log(AlphabeticalOrder('hello')); 




// 3. Check if a number is Even or Odd
function oddOrEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(oddOrEven(9)); 




// 4. Remove odd numbers from an array
function evenNum(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9])); 




// 5. Absolute sum of array elements
function getAbsSum(arr) {
  return arr.reduce((sum, num) => sum + Math.abs(num), 0);
}
console.log(getAbsSum([-1, -3, -5, -4, -10, 0])); 




//################################################################
// Mid
// 1. Factorial of a number
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(8)); 




// 2. Remove strings from an array
function numbersOnly(arr) {
  return arr.filter(item => typeof item === 'number');
}
console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); /







// 3. Sum of a number going back to its root
function addUp(num) {
  return (num * (num + 1)) / 2;
}
console.log(addUp(8)); 






// 4. Array statistics
function minMaxLengthAverage(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average = arr.reduce((sum, num) => sum + num, 0) / length;
  return [min, max, length, average];
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); 








// 5. Convert to Roman Numerals
function romanNumbers(num) {
  const roman = [
      ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
      ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
      ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
  ];
  return roman.reduce((result, [letter, value]) => {
      while (num >= value) {
          result += letter;
          num -= value;
      }
      return result;
  }, '');
}
console.log(romanNumbers(1989)); 









//################################################################
// Advanced
// 1. Count words in a string
function countWords(str) {
  return str.split(' ').length;
}
console.log(countWords('hello from CodingAcademy!')); 



// 2. Multiply array elements by its length
function MultiplyByLength(arr) {
  const length = arr.length;
  return arr.map(num => num * length);
}
console.log(MultiplyByLength([4, 2, 5])); 





// 3. Check if str1 ends with str2
function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}
console.log(checkEnding("CodingSchool", "Ac")); 







// 4. Repeat each string character twice
function doubleChar(str) {
  return str.split('').map(char => char + char).join('');
}
console.log(doubleChar('Coding')); 










// 5. Find index of an element in an array
function findIndex(arr, element) {
  return arr.indexOf(element);
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')); 




