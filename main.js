const inputs = document.querySelectorAll('.inputs').values;
const btnSubmit = document.querySelectorAll('.inputs')

  
btnSubmit.onClick = console.log('pepe');


function ConstructorBook(name, author, img, pages, read){
  this.name = name;
  this.author = author;
  this.image_book = img;
  this.number_pages = pages;
  this.state_book = read;
}
const librery = [];

const addBookToLibrery = () => {

}

console.log(ConstructorBook);