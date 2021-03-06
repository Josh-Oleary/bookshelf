import React, { Component } from 'react'
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
    const { info, changeShelf, books } = this.props;
    return (
      <div className='book-details-container'>
          {/* collecting data from props.info to populate the book info */}
          {info.imageLinks ? (
            <div 
              className='book-cover'
              style={{ backgroundImage: `url(${info.imageLinks.smallThumbnail})` }}
          ></div>
          ) : (
            <div
              className='book-cover'
              style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1TflCyfWDMNu6q7hVfgolfdYix7qE377UQ&usqp=CAU)`}}>
            </div>
          )}
          
            
          
          <div className='book-details'>
            <p className='title'>{info.title}</p>
            {info.authors && (
              info.authors.map((a, i) => {
                return <p key={i} className='author'>{a}</p>
              })
            )}
            
          </div>
          
      <ShelfSwitcher changeShelf={changeShelf} info={info} books={books} />
      </div>
      
    )
  }
}

export default Book;