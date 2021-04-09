for (var i = 1; i <= 100; i++) {
  var number = i;

  if (number % 3 === 0 && number % 5 === 0) {
    number = "FizzBuzz";
  } else if (number % 3 === 0) {
    number = "Fizz";
  } else if (number % 5 === 0) {
    number = "Buzz";
  }

  console.log(number);
}
