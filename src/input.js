import React, { Component } from 'react';

export default class InputField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleInput: '',
      bodyInput: ''
    }
  }

  render() {
    return (
      <div className="ideaInput">
        <input type="text" placeholder="title" />
        <input type="text" placeholder="body" />
        <button>Submit</button>
      </div>
    )
  }
}