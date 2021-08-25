import React, { Component } from 'react'
import './App.css';
import BookCase from './BookCase'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
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
  changeShelf = (alteredBook, shelf) => {
    BooksAPI.update(alteredBook, shelf)
      .then(res => {
        alteredBook.shelf = shelf;
        this.setState(curState => ({
          books: curState.books.filter(book => book.id !== alteredBook.id).concat(alteredBook)
        }))
      })
  }
  render(){
    const { books } = this.state;

    return (
      <div>
        <BookCase books={this.state.books} changeShelf={this.changeShelf} />
        <SearchPage changeShelf={this.changeShelf} books={books} />
      </div>
      
    );
  }
 
}

export default App;
