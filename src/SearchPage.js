import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './SearchPage.css'
import Book from './Book'

class SearchPage extends Component {
  state={
    booksOnDisplay: [],
    query: '',
  }
  updateQuery = query => {
    BooksAPI.search(query)
      .then(res => 
        this.setState(curState => ({
          booksOnDisplay: curState.booksOnDisplay.concat(res),
          query: query.trim()
          })
        ))
  }
  
  render(){
    const { query, booksOnDisplay } = this.state;
    const { books, changeShelf} = this.props;
    return(
      <div>
        <form className='search-form'>
          <input 
            className='search-bar' 
            type='text' 
            placeholder='Title or Author...'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </form>
        <div className='search-results'>
          {booksOnDisplay.map(b => {
            return <div className='result-img'>
                      <Book
                        books={books}
                        changeShelf={changeShelf}
                        info={b}
                        key={b.id}
                        shelf={b.shelf || 'none'}
                      />
                    </div>
          })}
        </div>
      </div>
    )
  }
}

export default SearchPage;