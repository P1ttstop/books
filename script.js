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
let myArray = [];

function Book(title, author, year, pages) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
}

function createBookObject() {
  const bookInfoForm = document.getElementById("bookInfoForm");
  const formData = new FormData(bookInfoForm);
  const formDataObject = Object.fromEntries(formData.entries());
  formDataObject.prototype = Object.create(Book.prototype);
  return formDataObject;
}

function addBookToLibrary(event) {
  let form = document.querySelector("form");
  myArray.push(createBookObject());
  event.preventDefault();
  form.reset();
  console.log(myArray);
}

let button = document.getElementById("addToLibrary");
button.addEventListener("click", addBookToLibrary);
