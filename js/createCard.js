import { cardContainer, changeState, deleteCard, tagStatus } from "../main.js";
import { librery } from "./data.js";

const createCard = (data) => {
  const {name, author, image_book, number_pages, state_book, id} = data;
  const state = state_book ? "Reading" : "Read";
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  const elementCard = `
    <div class="cover">
      <img src=${image_book} alt="${name}">
    </div>
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
        <button type="button" class="change-status">Change Status</button>
        <button type="button" class="delete">Delete</button>
      </div>
    </div>
  `
  cardDiv.innerHTML = elementCard
  const changeStatusButton = cardDiv.querySelector('.change-status');
  const deleteButton = cardDiv.querySelector('.delete');
  changeStatusButton.addEventListener('click', () => changeState(id));
  deleteButton.addEventListener('click', () => deleteCard(id))
  return cardContainer.appendChild(cardDiv)
}

export function printCard (){
  cardContainer.innerHTML = "";
  librery.forEach(event => {
    if(event.state_book === tagStatus){
      createCard(event)
      // console.log("tags", event.state_book);
      
    }else if (tagStatus === ""){
      createCard(event)
      // console.log("all");
    }
  });
}