import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component{
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
              onChange={searchBooks}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {books.map(book =>
            <Book book={book} updateShelf={updateShelf} />
          )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
