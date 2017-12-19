import React, { Component } from 'react';
import LikesCounter from './components/LikesCounter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <LikesCounter initialLikes="0"/>
    );
  }
}

export default App;
