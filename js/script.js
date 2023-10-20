const bodyElem = document.querySelector("body");

// Program Logic
let numberList = "";
for (let i = 1; i <= 100; i++) {
    let result;
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
        numberList += `<div class="square">${result}</div>`
    } else if (i % 3 === 0) {
        result = "Fizz";
        numberList += `<div class="square">${result}</div>`
    } else if (i % 5 === 0) {
        result = "Buzz";
        numberList += `<div class="square">${result}</div>`
    } else if (!(i % 3 === 0 && i % 5 === 0)) {
        result = "";
        numberList += `<div class="square">${i}</div>`
    }
    console.log(` ${i} ${result}`);
}

bodyElem.innerHTML = numberList;



// Output