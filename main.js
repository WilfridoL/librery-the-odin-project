import { ConstructorBook } from "./js/constructor.js";
import { librery } from "./js/data.js";
import { printCard } from "./js/createCard.js";

// funcionalidades del formulario

// Variables

const inputs = {
  "name": document.querySelector('[data-name]'),
  "author": document.querySelector('[data-author]'),
  "img": document.querySelector('[data-img]'),
  "pages": document.querySelector('[data-pages]'),
  "reading": document.querySelector('[data-read]'),
};
const form = document.querySelector('[data-form]');
export const cardContainer = document.querySelector('[data-card]');

const modalContainer = document.querySelector('[data-modal]');
const btnOpen = document.querySelector('[data-open]');
const btnClose = document.querySelector('[data-close]');
let stateModal = false;

const tag = document.querySelectorAll('[data-tags]');
export let tagStatus = "";
const activeTagClass = (event) => {
  tag[0].classList.remove("active")
  tag[1].classList.remove("active")
  tag[2].classList.remove("active")
  tag[event].classList.add("active") 
} 
tag[0].addEventListener('click', () => {
  tagStatus = ""
  updateData()
  activeTagClass(0)
})
tag[1].addEventListener('click', () => {
  tagStatus = false
  updateData()
  activeTagClass(1)
})
tag[2].addEventListener('click', () => {
  tagStatus = true
  updateData()
  activeTagClass(2)
})

function modal() {
  const modal = stateModal ? modalContainer.classList.add("openModal") : modalContainer.classList.remove("openModal");
  return modal
}

btnOpen.addEventListener('click', () => {stateModal = true; modal()});
btnClose.addEventListener('click', () => {stateModal = false; modal()});


const addBookToLibrery = () => {
  let id = Math.floor(Math.random() * 100000000);
  let { name, author, img, pages, reading } = inputs;
  let newBook = new ConstructorBook(
    name.value, 
    author.value, 
    img.value, 
    pages.value, 
    reading.checked, 
    id)
    librery.push(newBook)
    console.log(librery);
}

const resetInputs = () =>{
  let { name, author, img, pages, reading } = inputs;
  name.value = ""
  author.value = ""
  img.value = ""
  pages.value = ""
  reading.checked = false
}

const updateData = () => {
  printCard()
  // console.log(btnStatus);
}


form.addEventListener('submit' ,(e) => {
  e.preventDefault()
  addBookToLibrery()
  updateData()
  resetInputs()
  stateModal = false; 
  modal()
})

// Cambiar estado de la card

export const changeState = (id) => {
  // Encuentra el indice en la librería del libro seleccionado
  const libro =  librery.findIndex(event => event.id === id);
  // Se actualiza el estado del libro
  librery[libro].state_book = !librery[libro].state_book
  updateData()
}

// Eliminar card 

export const deleteCard = (id) => {
  const deleteBook = librery.findIndex(event => event.id === id);
  // console.log(librery, deleteBook);
  librery.splice(deleteBook, 1)
  updateData()
}

updateData()