import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component{
  state = {
    books: []
  }
  //Search for books and lists 20 of them, replaces books in the books array
  searchBooks(query){
    BooksAPI.search(query).then((books) => {
      this.setState(() => ({
        books
      }))
    }).catch(err => console.error(err))
  }

  //event handler for search
  handleSearch = event => {
    this.searchBooks(event.target.value)
  }

  render(){
    const {books, updateShelf, searchBooks} = this.props
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleSearch}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

          {this.state.books === undefined || !this.state.books.length ?
            <p>No results found...</p> :
            this.state.books.map(book =>
              <Book book={book} updateShelf={updateShelf} />
            )
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
