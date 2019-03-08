
//////////////////////////////////////////////
////////////// helper functions //////////////
//////////////////////////////////////////////

function drawGrid(gridSide, gridTotal) {
    for(i=0; i<gridTotal; i++){
        div = document.createElement('div')
        div.setAttribute('id', 'gridBox')
        gridContainer.appendChild(div);
    }
    gridContainer.setAttribute('style', 'grid: repeat(' + gridSide + ',auto) / repeat(' + gridSide + ',auto)')
}


function blackOnHover() {
    var divs = document.querySelectorAll('.grid-container div')
    divs.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            e.target.setAttribute('style', 'background: black')
        })
    })
}


function removeGrid() {
    var gridBoxes = document.querySelectorAll("div#gridBox")
    gridBoxes.forEach((div) => {
        div.parentNode.removeChild(div)
    })
}


function resetGridColor() {
    var divs = document.querySelectorAll('.grid-container div')
    divs.forEach((div) => {
        div.setAttribute('style' ,'background: rgb(240, 239, 239)')
    })
}

function rainbowColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return('rgb(' + r + ',' + g + ',' + b + ')')
}


function rainbowOnHover() {
    var divs = document.querySelectorAll('.grid-container div')
    divs.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            rgb = rainbowColor()
            e.target.setAttribute('style' ,'background: ' + rgb)
        })
    })
}



//////////////////////////////////////////////
////////////// initial drawing ///////////////
//////////////////////////////////////////////


const gridContainer = document.querySelector('.grid-container')
const GridSide = 16;                                                                // initial gridSide is 4, set the grid attribute to repeat 4x4
gridContainer.setAttribute('style', 'grid: repeat(' + GridSide + ',auto) / repeat(' + GridSide + ',auto)')
const GridTotal = GridSide * GridSide;                                              // compute total number of squares in grid

drawGrid(GridSide, GridTotal)
blackOnHover()


//////////////////////////////////////////////
////////////// clear and prompt //////////////
//////////////////////////////////////////////

var clearButton = document.querySelector('.clear')

clearButton.addEventListener('click', function() {
    const newGridSide = prompt('How large should the new grid be?')                 // prompt to get user input for new size
    const newGridTotal = newGridSide * newGridSide;
    removeGrid()
    drawGrid(newGridSide, newGridTotal)
    blackOnHover()
})


//////////////////////////////////////////////
////////////// rainbow colors ////////////////
//////////////////////////////////////////////

var rainbowButton = document.querySelector('.rainbow')

rainbowButton.addEventListener('click', function() {
    rainbowOnHover()
})

