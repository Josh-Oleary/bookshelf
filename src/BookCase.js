import React, { Component } from 'react'
import BookShelf from './BookShelf'
import './Styles/Bookcase.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class BookCase extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  }
  render() {
    const { books, changeShelf } = this.props
    return (
      <div className='Bookcase'>
        {/* using react router to set up app links */}
        <Link
          className='search-nav-link'
          to='/search'>
            Search Books
        </Link>
        <h1>My Bookshelf</h1>
        <BookShelf books={books} changeShelf={changeShelf} name={'currentlyReading'} title={'Reading'} />
        <BookShelf books={books} changeShelf={changeShelf} name={'wantToRead'} title={'Next Up'} />
        <BookShelf books={books} changeShelf={changeShelf} name={'read'} title={'Finished'} />
        
      </div>
      
    )
  }
}



export default BookCase;