import React, { Component } from 'react';

export default class Idea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleInput: '',
      bodyInput: ''
    }
  }

  render() {
    return (
      <div className="idea">
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <button>Upvote</button>
        <button>Downvote</button>
        <button>Delete</button>
      </div>
    )
  }
}
