let squaresContainer = document.querySelector('.squares-container');


for (let i = 1; i <= 100; i++) {
    
    console.log(i)
    
    squaresContainer.innerHTML = squaresContainer.innerHTML + `<div class="square">${i}</div>`;
    
}