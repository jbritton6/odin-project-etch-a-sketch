setGrid(10);

function setGrid(gridSize) {
    let cellSize = 500 / gridSize;     // in px
    let divContainer = document.querySelector('#container');

    for (let i = 0; i < gridSize**2 ; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('style', 
            `border: 1px solid black;
             box-sizing: border-box;
             flex-shrink: 0;
             height: ${cellSize};     
             width: ${cellSize}px;`);
        cell.classList.add('cell');
        divContainer.appendChild(cell);
    }

}