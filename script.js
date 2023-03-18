// function Player(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = () => {
//     let result = `${title} by ${author}, ${pages} `;
//     if (read === false) {
//       return result + `pages, not read yet`;
//     } else if (read === true) {
//       return result + `pages, has been read`;
//     }
//   };
// }

// const theHobbit = new Player("The Hobbit", "J.R.R Tolkien", 295, true);

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function createBookObject() {}

function addBookToLibrary() {
  let myLibrary = [];
}
