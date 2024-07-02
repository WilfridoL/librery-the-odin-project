const inputs = {
  "name": document.querySelector('[data-name]'),
  "author": document.querySelector('[data-author]'),
  "img": document.querySelector('[data-img]'),
  "pages": document.querySelector('[data-pages]'),
  "reading": document.querySelector('[data-read]'),
};
const btnSubmit = document.querySelector('[data-submit]');
const cardContainer = document.querySelector('[data-card]');
// btnSubmit.addEventListener('submit' ,(e) => {
//   e.preventDefault()
//   addBookToLibrery()
// })

function ConstructorBook(name, author, img, pages, read, id) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.image_book = img;
  this.number_pages = pages;
  this.state_book = read;
}
const librery = [
  {
    "id": 0,
    "name": "Cien años de soledad",
    "author": "Gabriel Garcia Marquez",
    "image_book": "",
    "number_pages": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTddccIaADdko_XE0-T9H2Wloy5bugv_dQIag&s",
    "state_book": true
  }
];
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
}

// const printBook = () => {
// }

// console.log(ConstructorBook);