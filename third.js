// To print all the prime numbers from 2 to 100

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
