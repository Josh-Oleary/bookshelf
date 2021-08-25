import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfSwitcher extends Component {
  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired,
  }
  //function to handle change and trigger callback function passed from app
  handleChange = event => {
    this.props.changeShelf(this.props.info, event.target.value);
  }
  render(){
    const { info } = this.props;

    return (
      <div>
        {/* sets current state option as defualt value */}
        <select value={info.shelf || 'none'} onChange={this.handleChange} show-tick="true">
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