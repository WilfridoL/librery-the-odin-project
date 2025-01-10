# Library Project

This project is a simple web application for managing a collection of books, allowing users to add, view, and categorize books according to their reading status.

## Features

- **Add Books**: Users can add new books by providing information such as the name, author, number of pages, and a URL for the book cover.
- **Categories**: Books can be categorized as "Read", "Unread", or simply show "All" books.
- **State Management**: Users can change the state of a book between read and unread.
- **Delete Books**: It is possible to remove books from the collection.
- **Interactive Modal**: The form for adding books is displayed in an interactive modal.

## File Structure

- `index.html`: Main HTML file structuring the page and its main components.
- `main.js`: Contains the main logic for DOM manipulation and event handling, such as adding books, opening and closing modals, and updating the book list.
- `constructor.js`: Contains the logic for constructing a new book.
- `createCard.js`: This file allows us to reuse the code for creating and displaying book cards on the screen.
- `data.js`: Contains the book data where the data of new books is stored and where the default book data is extracted.

## Technologies Used

- **HTML5** for the structure of the page.
- **SASS** and **CSS3** for styling and design (references to CSS files included in `index.html`).
- **JavaScript (ES6)** for dynamic interaction and DOM manipulation.
- **Google Fonts** for custom fonts.

## How to Use

1. **Start**: When the page loads, a list of all current books is displayed.
2. **Add Book**: Click the "Add book" button to open the modal and fill out the form with the book details.
3. **Categorize**: Use the category buttons to filter books by their reading status.
4. **Change State**: Click on a book to toggle its state between "Read" and "Unread".
5. **Delete**: Books can be removed from the collection as desired.

## Author

- **WilDev**: Project developer.
- **The Odin Project**: Project idea.

---
