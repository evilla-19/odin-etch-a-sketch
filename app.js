const gridContainer = document.querySelector('.grid-container')

// create squares, the CSS will take care of displaying them as a grid!
for(i=0; i<256; i++){
    // console.log(i)
    div = document.createElement('div')
    gridContainer.appendChild(div);
}

