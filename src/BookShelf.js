import React, { Component } from 'react'
import './Styles/Bookshelf.css'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  }
  render() {
    const { title, name, books, changeShelf } = this.props;
    //filtering out books that match the shelf value
    const shelfBooks = books.filter(b => {
      return b.shelf === name;
    })
    return (
      <div className='shelf-container'>
        <h3 className='shelf-title'>{title}</h3>
        <div className='book-container'>
          {/* mapping over filtered books array to populate this shelf */}
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