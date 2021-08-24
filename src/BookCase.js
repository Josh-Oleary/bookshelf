import React, { Component } from 'react'
import BookShelf from './BookShelf'
import './Bookcase.css'
import * as BooksAPI from './BooksAPI'

class BookCase extends Component {
  
  render() {
    return (
      <div className='Bookcase'>
        <h1>My Bookshelf</h1>
        <BookShelf name={'currentlyReading'} title={'Reading'} />
        <BookShelf name={'wantToRead'} title={'Next Up'} />
        <BookShelf name={'read'} title={'Finished'} />
      </div>
      
    )
  }
}



export default BookCase;