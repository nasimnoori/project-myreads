# project-myreads
**MyReads** is web application which allows you to select, categorize books which you have read, want to read or currently reading. This application uses google's books API to search for books.

To install this project in your system:
* install all project dependencies with `npm install`
* start the development server with `npm start`

If you're using **yarn**:
* install all project dependencies with `yarn install`
* start the development server with `yarn start`

## Important files in the **src** folder:
### App.js:
This is the main Component of the App which keeps and updates the state of the application.
the `componentDidMount()` uses the **getAll** method from the **BooksAPI** file and sets the state of the app by filling the books array in the state with books that are already in one of the three shelves.

the `searchBooks()` and `handleSearch()` methods works together to search for books on the server. `handleSearch()` is an event listener method which listens to events coming from the **SearchBooks** component, then uses the `searchBooks()` method to search for books. and sets the state with the new list of books.
### Note:
if we did not have a separate component for searching books and this functionality was part of the App.js component, then we did not need the **handleSearch** event handler instead we could create the handler inside the input element `onChange={(event) => this.searchBooks(event.target.value)}/>`.

the `handleUpdateShelf()` method moves books from one shelf to another.

### Book.js
this component creates a single book, which is then add to one of the shelves or to search results.

### BookShelf.js
Creates a shelf component, Note that we pass all data including books, title of the shelf as props to this component.

### SearchBooks.js
This component searches for books on the server from where then a user can add to to one of the shelfs.
