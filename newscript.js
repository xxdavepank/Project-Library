const dialog = document.querySelector("dialog");
const openBtn = document.querySelector(".bookPlus");
const closeBtn = document.querySelector(".close");
const submit = document.querySelector(".submit");
const author = document.querySelector(".author");
const title = document.querySelector(".title");
const pages = document.querySelector(".pages");
const radio1 = document.querySelector(".radio1");
const radio2 = document.querySelector(".radio2");

// Store the books
const library = new addBookToLibrary();

openBtn.addEventListener("click", function () {
  // Show the dialog
  dialog.showModal();
});

closeBtn.addEventListener("click", function () {
  // Close the dialog
  dialog.close();
});

function Book(author, title, pages, read) {
  // Constructor for Book
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  this.books = [];

  this.addBook = function (book) {
    this.books.push(book);
  };

  this.displayBooks = function () {
    const content = document.querySelector(".content");
    content.innerHTML = ""; // Clear existing content

    this.books.forEach(function (book, index) {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book");

      const closeButton = document.createElement("button");
      closeButton.textContent = "delete";
      closeButton.classList.add("close-button");
      closeButton.style.margin = "20px";

      bookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Read: ${book.read}`;
      bookDiv.appendChild(closeButton);

      closeButton.addEventListener("click", function () {
        library.removeBook(index);
        library.displayBooks();
      });

      content.appendChild(bookDiv);
    });
  };

  this.removeBook = function (index) {
    this.books.splice(index, 1);
  };
}

submit.addEventListener("click", function (e) {
  e.preventDefault();

  const authorText = author.value;
  const titleText = title.value;
  const pagesText = pages.value;
  let radioChoices;

  if (radio1.checked) {
    radioChoices = radio1.value;
  } else if (radio2.checked) {
    radioChoices = radio2.value;
  }

  const newBook = new Book(authorText, titleText, pagesText, radioChoices);
  library.addBook(newBook);
  library.displayBooks();

  dialog.close();
});
