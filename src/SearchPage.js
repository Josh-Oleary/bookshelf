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
    // this.setState(() => ({
    //   query: query.trim()
    // }))
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
                        info={b}
                        key={b.id}
                      />
                    </div>
          })}
        </div>
      </div>
    )
  }
}

export default SearchPage;