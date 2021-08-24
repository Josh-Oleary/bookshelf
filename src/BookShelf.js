import React, { Component } from 'react'
import './Bookshelf.css'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class BookShelf extends Component {
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
  
  updateShelf = (book, shelf) => {

  }

  handleChange = () => {
    this.updateShelf();
  }

  render() {
    const { title, name } = this.props;
    const shelfBooks = this.state.books.filter(b => {
      return b.shelf === name;
    })
    

    return (
      <div className='shelf-container'>
        <h3 className='shelf-title'>{title}</h3>
        <div className='book-container'>
          {shelfBooks.map(b => {
            return <Book 
                    changeShelf={this.handleChange} 
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