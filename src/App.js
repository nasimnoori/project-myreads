import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //Lists all the books currently in shelves, fills up the books array
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  //Search for books and lists 20 of them, replaces books in the books array
  searchBooks(query){
    BooksAPI.search(query).then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  //event handler for search
  handleSearch = event => {
    this.searchBooks(event.target.value)
  }

  //Moves a book from one shelf to another
  handleUpdateShelf = (book) => {
    let selectedBookId = { id: book.target.id } //selected book
    let value = book.target.value //value of the selectd option in the list (currentlyReading, wantToRead, read)
    BooksAPI.update(selectedBookId, value) //Updates the database
  }

  render() {
    return (<div className="app">
        <Route path='/search' render={() => (
          <SearchBooks
            searchBooks={this.handleSearch}
            books={this.state.books}
            updateShelf={this.handleUpdateShelf} />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  title={'Currently Reading'}
                  shelf={'currentlyReading'}
                  books={this.state.books}
                  updateShelf={this.handleUpdateShelf}
                />

                <BookShelf
                  title={'Want to Read'}
                  shelf={'wantToRead'}
                  books={this.state.books}
                  updateShelf={this.handleUpdateShelf}
                />

                <BookShelf
                  title={'Read'}
                  shelf={'read'}
                  books={this.state.books}
                  updateShelf={this.handleUpdateShelf}
                />

              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
