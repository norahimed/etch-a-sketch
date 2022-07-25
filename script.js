const grid = document.querySelector('.grid');

function createGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for(let t=0; t < (rows*cols); t++)
    {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}

createGrid(16,16);

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', function() {
    cell.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}))