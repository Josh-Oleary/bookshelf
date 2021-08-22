import React, { Component } from 'react'


class Book extends Component {
  render(){
    const { info } = this.props
    return (
      <div>
        <div>
          <img src={info.imageLinks.smallThumbnail}></img>
        </div>
        <select>
          <option>Reading</option>
          <option>Next Up</option>
          <option>Finished</option>
          <option>Remove</option>
        </select>
      </div>
      
    )
  }
}

export default Book;