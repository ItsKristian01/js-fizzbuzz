const bodyElem = document.querySelector("body");

// Program Logic
let numberList = "";
for (let i = 1; i <= 100; i++) {
    let result;
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
        numberList += `<div class="square fizz-buzz">${result}</div>`
    } else if (i % 3 === 0) {
        result = "Fizz";
        numberList += `<div class="square fizz">${result}</div>`
    } else if (i % 5 === 0) {
        result = "Buzz";
        numberList += `<div class="square buzz">${result}</div>`
    } else if (!(i % 3 === 0 && i % 5 === 0)) {
        result = "";
        numberList += `<div class="square numbers">${i}</div>`
    }
    console.log(` ${i} ${result}`);
}

bodyElem.innerHTML = numberList;



// Output