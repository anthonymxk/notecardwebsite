let library = [
    {title: 'Wolf of Wallstreet', front: 'text'},
    {title: 'Interstellar', front: 'textt'},
]

function notecard(title, front) {
    this.title = title
    this.front = front
}

//add new movie button
let addNewButton = document.querySelector('#addNewNotecard')

//create HTML grid box to display the movie
function addNotecardToHtmlLibrary(newNotecard) {
    let notecardGrid = document.createElement('div')
    let title = document.createElement('p')
    let front = document.createElement('p')
    let libraryDiv = document.querySelector('#library')
    notecardGrid.className = 'notecardGrid'
    title.textContent = `${newNotecard.title}`
    front.textContent = `${newNotecard.front}`
    notecardGrid.appendChild(title)
    notecardGrid.appendChild(front)
    libraryDiv.appendChild(notecardGrid)
}

//when button is clicked, ask for details,
// create the object, then create a new div at the end of the grid
//which displays the object
addNewButton.addEventListener('click', function() {
        //get user input
        let cardTitle = document.querySelector('#titleForm')
        let cardFront = document.querySelector('#frontForm')
        // assign user input to object, add move object to JS array
        library.push(new notecard(cardTitle.value,cardFront.value))
        //add movie object to HTML library
        addNotecardToHtmlLibrary(library[((library.length)-1)])
})

//create library of existing movies in library
for (let i=0;i<library.length;i++) {
    addNotecardToHtmlLibrary(library[i])
}

//get info from new notecard form

