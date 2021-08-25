import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Styles/App.css';
import BookCase from './BookCase'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'

class App extends Component {
  state={
    books: [],
  }
  //load books once component is mounted
  componentDidMount(){
    BooksAPI.getAll()
      .then(books => 
        this.setState(curState => ({
          books: curState.books.concat(books)
        })
      ))
  }
  //function to change the 'shelf' property of a book
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
      <div className='App'>
        <Route 
          exact path='/'
          render={() => (
          <BookCase
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}
        />
        <Route 
          path='/search'
          render={({ history }) => (
            <SearchPage 
              changeShelf={this.changeShelf} 
              books={books}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
