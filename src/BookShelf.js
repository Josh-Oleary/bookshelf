import React, { Component } from 'react'
import './Bookshelf.css'
import Book from './Book'



class BookShelf extends Component {



  render() {
    const { title, name, books, changeShelf } = this.props;
    const shelfBooks = books.filter(b => {
      return b.shelf === name;
    })
    

    return (
      <div className='shelf-container'>
        <h3 className='shelf-title'>{title}</h3>
        <div className='book-container'>
          {shelfBooks.map(b => {
            return <Book 
                    books={books}
                    changeShelf={changeShelf} 
                    info={b} 
                    key={b.id} 
                    shelf={b.shelf} 
                    />
          })}
        </div>
        <hr className='shelf-line'></hr>
      </div>
      
    )
  }
}

export default BookShelf;