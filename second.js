// To check if given number is prime or not


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


