import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './Styles/SearchPage.css'
import Book from './Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state={
    booksOnDisplay: [],
    query: '',
  }
  //function for updating query as user types, may add debounce for better ux
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
            placeholder='Search for book...'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <Link 
          to='/'
          className='search-form-nav'
          >To Bookshelf</Link>
          
        </form>
        <div className='search-results'>
          {/* displaying books that match the current query, which is held in the state */}
          {booksOnDisplay.length > 0 && (
            booksOnDisplay.map(b => {
              return <div className='result-img'>
                        <Book
                          books={books}
                          changeShelf={changeShelf}
                          info={b}
                          key={b.id}
                          // if the books does not have a shelf, it is set to default 'none'
                          shelf={b.shelf || 'none'}
                        />
                      </div>
            })
          )}
          
        </div>
      </div>
    )
  }
}

export default SearchPage;