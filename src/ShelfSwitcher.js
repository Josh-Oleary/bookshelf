import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ShelfSwitcher extends Component {
  handleChange = event => {
    this.props.changeShelf(this.props.info, event.target.value);
  }
  render(){
    const { info} = this.props;

    return (
      <div>
        <select value={info.shelf || 'none'} onChange={this.handleChange} show-tick="true">
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