import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './moocherBlock.css'

var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class Block extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const obj = this.props.obj;
    const index = this.props.index;

    return (
      <div key={index} className='moocher-block' style={{backgroundImage: "url(" + obj.publicURL + ")"}} >
          <img src={obj.publicURL}/><br/>
          <span className='moocher-block-place'>{obj.placesText}</span> <br/>
          <span className='moocher-block-datetime'>{obj.datetime.toLocaleDateString("ru-RU", dateOptions)}</span>
      </div>
    );
  }
}


export default Block
