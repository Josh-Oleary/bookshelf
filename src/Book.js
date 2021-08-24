import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import ShelfSwitcher from './ShelfSwitcher'


class Book extends Component {

  render(){
    const { info, changeShelf, books } = this.props
    
    return (
      <div>
        <div>
          <img src={info.imageLinks.smallThumbnail} alt='book'></img>
        </div>
      <ShelfSwitcher changeShelf={changeShelf} info={info} books={books} />
      </div>
      
    )
  }
}

export default Book;