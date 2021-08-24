import React, { Component } from 'react'


class Book extends Component {
  render(){
    const { info } = this.props
    
    return (
      <div>
        <div>
          <img src={info.imageLinks.smallThumbnail} alt='book'></img>
        </div>
        <select value={info.shelf} show-tick>
          <option value='currentlyReading'>Reading</option>
          <option value='wantToRead'>Next Up</option>
          <option value='read'>Finished</option>
          <option>Remove</option>
          <option value='none'>None</option> 
        </select>
      </div>
      
    )
  }
}

export default Book;