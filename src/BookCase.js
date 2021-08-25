import React, { Component } from 'react'
import BookShelf from './BookShelf'
import './Bookcase.css'
import * as BooksAPI from './BooksAPI'
import './Bookcase.css'

class BookCase extends Component {
  
  render() {
    const { books, changeShelf } = this.props
    return (
      <div className='Bookcase'>
        <a className='search-nav-link'href='/search'>Search Books</a>
        <h1>My Bookshelf</h1>
        <BookShelf books={books} changeShelf={changeShelf} name={'currentlyReading'} title={'Reading'} />
        <BookShelf books={books} changeShelf={changeShelf} name={'wantToRead'} title={'Next Up'} />
        <BookShelf books={books} changeShelf={changeShelf} name={'read'} title={'Finished'} />
        
      </div>
      
    )
  }
}



export default BookCase;