export function ConstructorBook(name, author, img, pages, read, id) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.image_book = img;
  this.number_pages = pages;
  this.state_book = read;
}