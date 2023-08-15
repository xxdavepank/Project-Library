const dialog = document.querySelector("dialog");
const openBtn = document.querySelector(".bookPlus");
const closeBtn = document.querySelector(".close");
const submit = document.querySelector(".submit");
const author = document.querySelector(".author");
const title = document.querySelector(".title");
const pages = document.querySelector(".pages");
const radio1 = document.querySelector(".radio1");
const radio2 = document.querySelector(".radio2");

let myLibrary = [];

function Book(author, title, pages, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  myLibrary.forEach((element) => {});
  // do stuff here
}
