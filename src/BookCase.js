import React, { Component } from 'react'
import BookShelf from './BookShelf'
import './Bookcase.css'
import * as BooksAPI from './BooksAPI'

class BookCase extends Component {
  state={
    books: [],
  }
  componentDidMount(){
    BooksAPI.getAll()
      .then(books => 
        this.setState(curState => ({
          books: curState.books.concat(books)
        })
      ))
  }
  
  render() {
    return (
      <div className='Bookcase'>
        <h1>My Bookshelf</h1>
        <BookShelf books={this.state.books} name={'currentlyReading'} title={'Reading'} />
        <BookShelf books={this.state.books} name={'wantToRead'} title={'Next Up'} />
        <BookShelf books={this.state.books} name={'read'} title={'Finished'} />
      </div>
      
    )
  }
}



export default BookCase;