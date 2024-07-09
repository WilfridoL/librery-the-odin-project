import { ConstructorBook } from "./js/constructor.js";
import { librery } from "./js/data.js";
import { printCard } from "./js/createCard.js";

const inputs = {
  "name": document.querySelector('[data-name]'),
  "author": document.querySelector('[data-author]'),
  "img": document.querySelector('[data-img]'),
  "pages": document.querySelector('[data-pages]'),
  "reading": document.querySelector('[data-read]'),
};
const form = document.querySelector('[data-form]');
export const cardContainer = document.querySelector('[data-card]');
// console.log(cardContainer);


const addBookToLibrery = () => {
  let id = Math.floor(Math.random() * 100000000);
  let { name, author, img, pages, reading } = inputs;
  let newBook = new ConstructorBook(
    name.value, 
    author.value, 
    img.value, 
    pages.value, 
    reading.value, 
    id)
    librery.push(newBook)
    console.log(librery);
}

form.addEventListener('submit' ,(e) => {
  e.preventDefault()
  addBookToLibrery()
  updateData()
})
const updateData = () => {
  printCard()
}
updateData()
