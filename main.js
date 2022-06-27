setGrid(10);

function setGrid(gridSize) {
    let cellSize = 500 / gridSize;     // in px
    let divContainer = document.querySelector('#container');

    for (let i = 0; i < gridSize**2 ; i++) {
        let cell = document.createElement('div');
        setAttributes(cell, cellSize);
        addHighlighting(cell);
        divContainer.appendChild(cell);
    }
}

function setAttributes(element, gridSize) {
    element.setAttribute('style', 
    `border: 1px solid black;
     box-sizing: border-box;
     flex-shrink: 0;
     height: ${gridSize};     
     width: ${gridSize}px;`);
}

function addHighlighting(element) {
    element.addEventListener('mouseover', () => {
        element.classList.add('hovered');
    })
}