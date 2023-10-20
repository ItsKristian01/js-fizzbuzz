const ulElem = document.querySelector("li");

// Program Logic
let numberList = "";
for (let i = 1; i <= 100; i++) {
    let result;
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
    } else if (i % 3 === 0) {
        result = "Fizz";
    } else if (i % 5 === 0) {
        result = "Buzz";
    }
    console.log(` ${i} ${result}`);
}





// Output