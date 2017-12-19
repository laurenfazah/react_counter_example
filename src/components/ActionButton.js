import React, { Component } from 'react';

class ActionButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="action-button">
        {this.props.text}
      </button>
    )
  }
}

export default ActionButton;
