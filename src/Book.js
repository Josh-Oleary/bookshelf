import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import ShelfSwitcher from './ShelfSwitcher'
import './Styles/Book.css'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    info: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  }

  render(){
    const { info, changeShelf, books } = this.props
    const { image } = info.imageLinks;
    return (
      <div className='book-details-container'>
          {/* collecting data from props.info to populate the book info */}
          <div className='book-cover'>
            <img src={info.imageLinks.smallThumbnail} alt='book'></img>
          </div>
          <div>
            <p className='title'>{info.title}</p>
            {info.authors.map(a => {
              return <p className='author'>{a}</p>
            })}
          </div>
          
      <ShelfSwitcher changeShelf={changeShelf} info={info} books={books} />
      </div>
      
    )
  }
}

export default Book;