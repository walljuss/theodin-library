let myLibrary = [];
const container = document.querySelector('.container');
const addBook = document.getElementById('addBook');
const bookshelf = document.querySelector('.bookshelf');

function Book(author, title, pages, ifread ) {
  this.author = author;
  this.title = title;
  this.pages = parseInt(pages);
  this.ifread = ifread;
}


function resetButton() {
  document.getElementById('resetButton').click();
}

function change_display() {
  if (document.querySelector('.popup').style.display != 'flex') {
    document.querySelector('.popup').style.display = 'flex';
  } else {
    document.querySelector('.popup').style.display = 'none';
  }
  clearBoard(bookshelf);
  presentBookshelf(myLibrary, bookshelf);
}

addBook.addEventListener('submit', (e) => {
  e.preventDefault();
  let author  = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pages = document.getElementById('pages').value;
  let ifread = document.getElementById('ifread').value;
  let newBook = new Book(author, title, pages, ifread);
  myLibrary.push(newBook);
  resetButton();
  clearBoard(bookshelf);
  presentBookshelf(myLibrary, bookshelf);
})

function presentBookshelf(Library, libBoard) {
  Library.forEach((item, index) => {
    const singleBook = document.createElement('div');
    singleBook.classList = 'singleBook';
    singleBook.setAttribute('data-index', index);
    for (keys in item) {
      
      
      if(keys === 'ifread') {
        continue;
      } else {
      const bookInfoTitles = document.createElement('p');
      bookInfoTitles.classList = 'bookInfoTitles';
      bookInfoTitles.innerHTML = keys;
      const bookInfoValues = document.createElement('p');
      bookInfoValues.innerHTML = item[keys];    
      singleBook.appendChild(bookInfoTitles);
      singleBook.appendChild(bookInfoValues);
      }

      /* not sure */
      const ifread = document.createElement('form');
      const readLabel = document.createElement('label');
      readLabel.setAttribute('id', 'ifread');
      const readCheckbox = document.createElement('input');
      readCheckbox.setAttribute('type', 'checkbox');
      readCheckbox.setAttribute('name', 'ifread');


    }
      /*delete button*/
      const delButton = document.createElement('button');
      delButton.innerHTML = 'Remove';
      delButton.classList = "removeBook";
      delButton.setAttribute('data-index', index);
      delButton.addEventListener('click', () => {
        Library = Library.splice(index, 1);
        clearBoard(libBoard);
        presentBookshelf(myLibrary, libBoard);
      } )
      singleBook.appendChild(delButton);
    libBoard.appendChild(singleBook);
  })
      
}

const clearBoard = (libBoard) => {
  while (libBoard.firstChild) {
    libBoard.removeChild(libBoard.lastChild);
  }
}


presentBookshelf(myLibrary, bookshelf);
