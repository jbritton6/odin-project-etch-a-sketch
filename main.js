btnClick();


function btnClick() {
    const btn = document.querySelector('#btn')
    btn.addEventListener('click', () => btnPopup(btn));
}


function btnPopup (element) {
    while(1) {
        let enteredGridSize = prompt("Enter grid dimension (1-100)", "");

        if (enteredGridSize === null) {
            return;
        }
        else if (
            Number(enteredGridSize) >= 1 &&
            Number(enteredGridSize) <= 100
        ) {
            setGrid(Number(enteredGridSize));
            return;
        } else {
            alert("Invalied grid dimension (must be between 1 and 100)");
        }
    }
}


function setGrid(gridSize) {
    let cellSize = 500 / gridSize;
    const divContainer = document.querySelector('#container');
    clearContainer(divContainer);
    
    for (let i = 0; i < gridSize**2 ; i++) {
        const cell = document.createElement('div');
        setAttributes(cell, cellSize);
        addHighlighting(cell);
        divContainer.appendChild(cell);
    }
}


function clearContainer(element) {
    if (element.firstChild){
        while(element.hasChildNodes()) {
            element.removeChild(element.lastChild)
        }
    }

}


function setAttributes(element, gridSize) {
    element.setAttribute('style', 
        `border: 1px solid black;
         box-sizing: border-box;
         flex-shrink: 0;
         height: ${gridSize}px;     
         width: ${gridSize}px;`);
}


function addHighlighting(element, q) {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 
            `hsl(${random365()}, 100%, 50%)`;
    })
}


function random365() {
    return Math.floor(Math.random() * 366);
}