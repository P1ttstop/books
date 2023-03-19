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
let myLibrary = [];
let addLibraryButton = document.getElementById("addToLibrary");
let openForm = document.getElementById("openForm");
let closeForm = document.getElementById("closeForm");

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
  myLibrary.push(createBookObject());
  event.preventDefault();
  form.reset();
  console.log(myLibrary);
  formClose();
}

function formOpen() {
  let formWrapper = document.getElementById("form-wrapper");
  formWrapper.style.display = "block";
}

function formClose() {
  let formWrapper = document.getElementById("form-wrapper");
  formWrapper.style.display = "none";
}

addLibraryButton.addEventListener("click", addBookToLibrary);

openForm.addEventListener("click", formOpen);
