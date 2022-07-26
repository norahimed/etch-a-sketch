const grid = document.querySelector('.grid');

function createGrid(rows, cols) {
    let w = 480/cols + "px";
    let h = 480/rows + "px";
    console.log('making a grid!')
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for(let t=0; t < (rows*cols); t++)
    {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = w;
        cell.style.height = h;
        grid.appendChild(cell);
    }
        
}

function defaultGrid() {
    createGrid(16,16);
    draw();
}

let size = document.querySelector('.size');
size.addEventListener('click', function() {
        let rc = prompt('How many rows/columns do you want?');
        
        if (rc <= 100)
        {
            changeSize(rc);
            draw();
        }
        else
        {
            alert("That is too big!")
        }
 })


function changeSize(rc) {
    let cells= document.querySelectorAll('.cell');
    cells.forEach(cell => cell.remove()); 
    createGrid(rc, rc);
}

function draw() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', function() {
        cell.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }))
}

defaultGrid();