# Day_08  
Solution of day_08 from 24 days GitHub question series.  
  
  
## Sorting of a number array with or without inbuilt methods  
   
### without inbuilt methods  
let arr = [3, 6, 2, 4, 87, 23, 98];  
function sorting(arr) {  
  for (let i = 0; i < arr.length; i++) {  
    if (arr[i] > arr[i + 1]) {  
      arr.push(arr[i]);  
      arr.splice(i, 1);  
      i = -1;  
    }  
  }  
  return arr;  
}  
console.log(sorting(arr));  
  
### with inbuilt methods  
// let arr = [6, 5, 2, 98, 55, 2, 7];  
// function sorting(arr) {  
//   arr.sort((a, b) => a - b);  
//   return arr;  
// }  
// console.log(sorting(arr));  


  
## To check if given number is prime or not  
  
function isPrime(num) {  
  if (num <= 1) {  
    return " Neither Prime nor Composite Number";  
  }  
  for (let i = 2; i * i <= num; i++) {  
    if (num % i === 0) {  
      return "Not a Prime Number";  
    }  
  }  
  return "Prime Number";  
}  
  
console.log(isPrime(4));  



## To print all the numbers from 2 to 100  
  
function isPrime(num) {  
  if (num <= 1) {  
    return false;  
  }  
  for (let i = 2; i * i <= num; i++) {  
    if (num % i === 0) {  
      return false;  
    }  
  }   
  return true;  
}  
  
// console.log(isPrime(100));  
  
function listPrimeNumber(start, end) {  
  for (let i = start; i <= end; i++) {  
    isPrime(i) ? console.log(i) : null;  
  }  
}  
console.log(listPrimeNumber(0, 100));  





