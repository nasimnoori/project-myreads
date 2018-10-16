import React, { Component } from 'react'

class Book extends Component {

  render() {
    const { book, updateShelf } = this.props
    let image = book.imageLinks
    let author = book.authors

    if (image === undefined) {
      image = "https://via.placeholder.com/128x193?text=Book"
    } else {
      image = image.thumbnail
    }

    if (author === undefined) {
      author = "Unknown Author"
    } else {
      author = book.authors
    }

    return(
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
            <div className="book-shelf-changer">
              <select id={book.id} value={book.shelf} onChange={updateShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    )
  }
}

export default Book
