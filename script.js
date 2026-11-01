const container = document.querySelector('.container')

let n = 5
let containerSize = 500
let choice = 'black'
let mode = ''
var theColor = ''
var count = 0


var colorPicked = document.getElementById("colorPicker")
colorPicked.addEventListener("input", function () {
    mode = 'picker'
    theColor = colorPicked.value;
}, false);

function reset() {
    const item = document.querySelectorAll('.item')
    item.forEach((item) => item.style.backgroundColor = '#EEEEEE')
}

function changeGrid() {
    n = Number(prompt('enter grid size (1-100)'))
    if (n > 100 || n < 1)
        return changeGrid()
    else
        makeGrid(n)
}

function colorChoice(color) {
    choice = color;
}
function changeColor() {
    if (choice === 'random')
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    else if (mode === 'picker')
        this.style.backgroundColor = theColor
    else {
        this.style.backgroundColor = "black"    
    }

    this.count++
        console.log(this.count)
}

function makeGrid(n) {
    // clear the current grid
    container.textContent = '';

    let i = 0;
    let squares = n * n
    let w = (containerSize / n)

    container.style.width = containerSize + 'px'

    for (i = 0; i < squares; i++) {
        const grid = document.createElement('div')
        grid.classList.add('item')
        grid.style.width = w + 'px'
        grid.style.height = w + 'px'
        grid.count=0

        grid.addEventListener('mouseover', changeColor)

        container.appendChild(grid)
    }
}


window.onload = makeGrid(n);

