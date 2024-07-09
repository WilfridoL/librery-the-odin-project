import { cardContainer } from "../main.js";
import { librery } from "./data.js";

const createCard = (data) => {
  const {name, author, image_book, number_pages, state_book, id} = data;
  // console.log(name, author, image_book, number_pages, state_book);
  // console.log(state_book ? "active" : "");
  const state = state_book ? "Reading" : "Read";
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  const elementCard = `
    <div class="cover"><img src=${image_book} alt="${name}"></div>
          <div class="dataBook">
            <h3>Title:</h3>
            <p>${name}</p>
            <h3>Author:</h3>
            <p>${author}</p>
            <h3>Number of pages:</h3>
            <p>${number_pages}</p>
            <h3>Status:</h3>
            <p>${state}</p>
            <div class="botones">
              <button type="button">Change Status</button>
              <button type="button" onclick="console.log(${id})">Delete</button>
            </div>
          </div>
  `
  cardDiv.innerHTML = elementCard
  return cardContainer.appendChild(cardDiv)
}
export function printCard (){
  cardContainer.innerHTML = "";
  librery.forEach(event => {
    createCard(event)
  });
}