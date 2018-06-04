import React, { Component } from 'react';
import './App.css';
import Input from './input.js';
import Search from './Search.js';
import IdeaContainer from './IdeaContainer.js';
import Idea from './Idea.js';

class App extends Component {
  constructor() {
    super()
    this.createIdea = this.createIdea.bind(this);
  }

  createIdea() {
    console.log('here');
    // return (
    //   <Idea title={titleInput} body={bodyInput} />

    // )
  }

  render() {
    return (
      <div className="App">
        <h1>IdeaBox</h1>
        <Input createIdea={this.createIdea}/>
        <Search/>
        <IdeaContainer>

        </IdeaContainer>
      </div>
    );
  }
}

export default App;
