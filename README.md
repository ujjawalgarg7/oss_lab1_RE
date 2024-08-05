# TodoMVC in Vanilla JavaScript

This is a simple to-do list application implemented in vanilla JavaScript as part of the TodoMVC project. The application allows users to add, view, and manage their to-do items.

## Project Structure

- `index.html`: Contains the basic structure of the to-do application, including the header, main section, and footer.
- `style.css`: Contains the styles for the application (not covered in this explanation).
- `app.js`: Contains the JavaScript logic for handling user interactions and managing to-do items.

## Reverse Engineering Explanation

### index.html

The `index.html` file sets up the basic structure of the to-do application:
- It includes a header with an input field where users can enter new to-do items.
- The main section contains an unordered list (`ul`) where the to-do items will be displayed.
- A script tag at the bottom includes the `app.js` file, which contains the JavaScript logic for the application.

### app.js

The `app.js` file adds an event listener to the input field:
- When the user presses 'Enter', a new to-do item is created and added to the list.
- The script starts by adding an event listener to the document to ensure the DOM is fully loaded before running.
- It selects the input field (class `new-todo`) and the unordered list (class `todo-list`).
- An event listener is added to the input field to listen for the `keypress` event.
- When the user presses 'Enter' (key code 13) and the input field is not empty, a new list item (`li`) is created.
- The text content of the list item is set to the value entered in the input field.
- The new list item is appended to the unordered list.
- The input field is cleared for the next entry.

## Getting Started

To get started with this project, simply clone the repository and open `index.html` in your browser.

```bash
git clone https://github.com/tastejs/todomvc.git
cd todomvc/examples/vanillajs
open index.html
