import React, { Component } from 'react'
import './Bookshelf.css'
import Book from './Book'


class BookShelf extends Component {

  render() {
    const { books, title, name } = this.props;
    const shelfBooks = books.filter(b => {
      return b.shelf === name;
    })
    console.log(shelfBooks)
    return (
      <div className='shelf-container'>
        <h3 className='shelf-title'>{title}</h3>
        <div className='book-container'>
          {shelfBooks.map(b => {
            return <Book info={b} key={b.id}/>
          })}
        </div>
        <hr className='shelf-line'></hr>
      </div>
      
    )
  }
}

export default BookShelf;