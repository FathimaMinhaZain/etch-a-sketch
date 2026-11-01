const container = document.querySelector('.container')

let n = 5

function changeGrid() {
    n = Number(prompt('enter grid size (1-100)'))
    if (n > 100 || n < 1)
        return changeGrid()
    else
        makeGrid(n)
}

function makeGrid(n) {
    // clear the current grid
    container.textContent = '';

    let i = 0;
    let containerSize = n * 50;
    let squares = n * n

    container.style.width = containerSize + 'px'

    for (i = 0; i < squares; i++) {
        const grid = document.createElement('div')
        grid.setAttribute(
            'style',
            'width:50px; height:50px; background-color:grey; border:1px solid black; box-sizing: border-box;'
        )
        grid.classList.add('item')
        container.appendChild(grid)
    }
}

window.onload = makeGrid(n);

