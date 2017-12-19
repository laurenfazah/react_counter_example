import React, { Component } from 'react';
import ActionButton from './ActionButton';

class LikesCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: this.props.initialLikes
    }
  }

  modifyLikes(like) {
    this.setState({
      likes: parseInt(this.state.likes) + like
    })
  }

  likesHandler() {
    this.modifyLikes(1)
  }

  dislikeHandler() {
    this.modifyLikes(-1)
  }

  render() {
    return (
      <div>
        <h1>LIKES: {this.state.likes}</h1>
        <ActionButton text="-1" onClick={this.dislikeHandler.bind(this)}/>
        <ActionButton text="+1" onClick={this.likesHandler.bind(this)}/>
      </div>
    )
  }
}

export default LikesCounter
