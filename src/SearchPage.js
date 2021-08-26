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
    searchErr: false,
  }
  //function for updating query as user types, may add debounce for better ux
  updateQuery = event => { 
    const query = event.target.value;
    this.setState({ query });

    if (query) {
    BooksAPI.search(query.trim(), 20)
      .then(books => {
        books.length > 0
        ? this.setState({booksOnDisplay: books, searchErr: false})
        : this.setState({booksOnDisplay: [], searchErr: true});
      } 
      )} else this.setState({booksOnDisplay: [], searchErr: false});
  }
  
  render(){
    const { query, booksOnDisplay, searchErr } = this.state;
    const { books, changeShelf} = this.props;
    return(
      <div className='search-page'>
        
        <form className='search-form'>
          <input 
            className='search-bar' 
            type='text' 
            placeholder='Search for book...'
            value={query}
            onChange={(event) => this.updateQuery(event)}
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
          {searchErr && (
            <h3>No books match this search, please try again!</h3>
          )}
        </div>
      </div>
    )
  }
}

export default SearchPage;