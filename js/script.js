/*let squaresContainer = document.querySelector('.squares-container');


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
*/



/*    METODO 'APPEND'   */

let squaresContainer = document.querySelector('.squares-container');


for (let i = 1; i <= 100; i++) {

    let elemento = document.createElement('div');
    elemento.classList.add('square');
    elemento.innerHTML = i ;

    if (i % 15 == 0) {

        elemento.classList.add('red');
        elemento.innerHTML = 'FizzBuzz'

    } else if (i % 3 == 0) {
    
        elemento.classList.add('green');
        elemento.innerHTML = 'Fizz'
    
    } else if (i % 5 == 0) {
    
        elemento.classList.add('yellow');
        elemento.innerHTML = 'Buzz'
        
    }

    squaresContainer.append(elemento)

    console.log(elemento)
    console.log(i)
    
}

