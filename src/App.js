import React, { Component } from 'react';
import './App.css';
import Input from './input.js';
import Search from './Search.js';
import IdeaContainer from './IdeaContainer.js';
import Idea from './Idea.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdeaBox</h1>
        <Input />
        <Search />
        <IdeaContainer />
      </div>
    );
  }
}

export default App;
