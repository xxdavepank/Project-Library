const dialog = document.querySelector("dialog");
const openBtn = document.querySelector(".bookPlus");
const closeBtn = document.querySelector(".close");
const submit = document.querySelector(".submit");
const author = document.querySelector(".author");
const title = document.querySelector(".title");
const pages = document.querySelector(".pages");
const radio1 = document.querySelector(".radio1");
const radio2 = document.querySelector(".radio2");
openBtn.addEventListener("click", function () {
  // Show the dialog
  dialog.showModal();
});
closeBtn.addEventListener("click", function () {
  // Close the dialog
  dialog.close();
});
const myLibrary = [];
function Book(author, title, pages, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

myLibrary.forEach(function (book, index) {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  const closeButton = document.createElement("button");
  closeButton.textContent = "delete";
  closeButton.classList.add("close-button");

  bookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Read: ${book.read}`;
  bookDiv.appendChild(closeButton);

  // closeButton.addEventListener("click", function (myLibrary.remo) {

  // });
});

submit.addEventListener("click", function (e) {
  dialog.close();
  e.preventDefault();

  let radioChoices = radio1.checked
    ? radio1.value
    : radio2.checked
    ? radio2.value
    : undefined;

  const newBook = new Book(
    author.value,
    title.value,
    pages.value,
    radioChoices
  );
  myLibrary.push(newBook);
});
