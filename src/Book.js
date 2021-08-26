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
    return (
      <div className='book-details-container'>
          {/* collecting data from props.info to populate the book info */}
          <div 
            className='book-cover'
            style={{ backgroundImage: `url(${info.imageLinks.smallThumbnail})`}}
          >
            
          </div>
          <div className='book-details'>
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