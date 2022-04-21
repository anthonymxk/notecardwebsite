let library = [
    {title: 'Wolf of Wallstreet', front: 'text', back:'back', tags:'green,science'},
    {title: 'Interstellar', front: 'textt', back:'back', tags:'red,math'},
]

//create new object 'notecard', assign properties based on arguments
function notecard(title, front, back, tags) {
    this.title = title
    this.front = front
    this.back = back
    this.tags = tags
}

//add new movie button
let addNewButton = document.querySelector('#addNewNotecard')

//create HTML grid box to display the movie
function addNotecardToHtmlLibrary(newNotecard) {
    //create new elements on page
    let notecardGrid = document.createElement('div')
    let backOfNotecard = document.createElement('div')
    let title = document.createElement('p')
    let front = document.createElement('p')
    let back = document.createElement('p')
    let tags = document.createElement('p')
    let libraryDiv = document.querySelector('#library')

    //give a class for styling
    notecardGrid.className = 'notecardGrid'
    backOfNotecard.id = 'backOfNotecard'
    title.id = 'cardTitle'
    front.className = 'cardBody'
    back.className = 'cardBody'
    tags.id = 'cardTags'
    //change text content to properties of object
    title.textContent = `${newNotecard.title}`
    front.textContent = `${newNotecard.front}`
    back.textContent = `${newNotecard.back}`
    tags.textContent = `${newNotecard.tags}`

    //hide the back of the notecard initially
    backOfNotecard.style.display = 'none'
    //display items on screen
    // items for front of notecard
    notecardGrid.appendChild(title)
    notecardGrid.appendChild(front)
    notecardGrid.appendChild(tags)
    // items for back of notecard
    backOfNotecard.appendChild(back)
    notecardGrid.appendChild(backOfNotecard)
    //display notecard in the library
    libraryDiv.appendChild(notecardGrid)

}

//when button is clicked, ask for details,
// create the object, then create a new div at the end of the grid
//which displays the object
addNewButton.addEventListener('click', function() {
        //get user input
        let cardTitle = document.querySelector('#titleForm')
        let cardFront = document.querySelector('#frontForm')
        let cardBack = document.querySelector('#backForm')
        let cardTags = document.querySelector('#tagsForm')
        // assign user input to object, add move object to JS array
        library.push(new notecard(cardTitle.value,cardFront.value,cardBack.value,cardTags.value))
        //add movie object to HTML library
        addNotecardToHtmlLibrary(library[((library.length)-1)])
})

//create library of existing movies in library
for (let i=0;i<library.length;i++) {
    addNotecardToHtmlLibrary(library[i])
}

//get info from new notecard form

