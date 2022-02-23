let squaresContainer = document.querySelector('.squares-container');


for (let i = 1; i <= 100; i++) {

    if (i % 15 == 0) {

        squaresContainer.innerHTML = squaresContainer.innerHTML + `<div class="square red"> FizzBuzz </div>`;

    } else if (i % 3 == 0) {
    
        squaresContainer.innerHTML = squaresContainer.innerHTML + `<div class="square green"> Fizz </div>`;
    
    } else if (i % 5 == 0) {
    
        squaresContainer.innerHTML = squaresContainer.innerHTML + `<div class="square yellow"> Buzz </div>`;
    
    } 
    else {
        squaresContainer.innerHTML = squaresContainer.innerHTML + `<div class="square">${i}</div>`;
    }
    
}

