import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfSwitcher extends Component {
  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
  }
  //function to handle change and trigger callback function passed from app
  handleChange = event => {
    this.props.changeShelf(this.props.info, event.target.value);
  }
  render(){
    const { info, books } = this.props;

    let curShelf = 'none';

    //if book is on shelf, set shelf prop to info.shelf
    for(let book of books){
      book.id === info.id && (
        curShelf = book.shelf
      )
    }

    return (
      <div>
        {/* sets current state option as defualt value */}
        <select value={curShelf} onChange={this.handleChange} show-tick="true">
          <option disabled>Move to...</option>
          <option value='currentlyReading'>Reading</option>
          <option value='wantToRead'>Next Up</option>
          <option value='read'>Finished</option>
          <option value='none'>None</option> 
        </select>
      </div>
      
    )
  }
}
export default ShelfSwitcher;