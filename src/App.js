import React, { Component } from 'react';
import './App.css';
import Input from './input.js';
import Search from './Search.js';
import IdeaContainer from './IdeaContainer.js';
import Idea from './Idea.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideaTitle: '',
      ideaBody: ''
    }
    this.createIdea = this.createIdea.bind(this);
  }

  createIdea(titleInput, bodyInput) {
    this.setState({
      ideaTitle: titleInput,
      ideaBody: bodyInput
    })
  }

  render() {
    if(this.state.ideaTitle && this.state.ideaBody) {
        return (
        <div className="App">
          <h1>IdeaBox</h1>
          <Input createIdea={this.createIdea}/>
          <Search/>
          <IdeaContainer>
            <Idea title={this.state.ideaTitle} body={this.state.ideaBody} />
          </IdeaContainer>
        </div>
      );
    } else {
        return (
        <div className="App">
          <h1>IdeaBox</h1>
          <Input createIdea={this.createIdea}/>
          <Search/>
        </div>
      )
    }
  }
}

export default App;
