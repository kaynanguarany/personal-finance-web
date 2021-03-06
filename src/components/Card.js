import React, { Component } from 'react';

class Card extends Component {
  render () {
    return (
      <div className="card">
        <div className="card-header">
          {this.props.title}
        </div>
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Card; 