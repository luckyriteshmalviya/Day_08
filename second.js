// To check if given number is prime or not

function isPrime(num) {
  if (num === 2 || num === 1) {
    return "Prime Number";
  }
  if (num > 2) {
    for (var i = 2; i < num; i++) {
      if (num % i !== 0) {
        return "Prime Number";
      } else if (num === i * i) {
        return "Not a Prime Number";
      } else {
        return "Not a Prime Number";
      }
    }
  }
}

console.log(isPrime(4));
