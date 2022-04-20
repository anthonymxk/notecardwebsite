let library = []



function book(name) {
    this.name = name
}

function addBookToLibrary() {
    let name = prompt('Name of book?')
    let newBook = new book(name)
    library.push(newBook)
}

//add new movie
let addNewButton = document.querySelector('#addNewMovie')

//when button is clicked, ask for details,
// create the object, then create a new div at the end of the grid
//which displays the object
addNewButton.addEventListener('click',function() {
    let movieGridBox = document.createElement('div')
    let movieTitle = document.createElement('p')
    let libraryDiv = document.querySelector('#library')
    movieGridBox.className = 'movieGridBox'
    movieTitle.textContent = 'Example Movie'
    movieGridBox.style.border = 'solid black'
    movieGridBox.appendChild(movieTitle)
    libraryDiv.appendChild(movieGridBox)
})