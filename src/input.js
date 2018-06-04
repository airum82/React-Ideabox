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
        <input type="text" 
          placeholder="title" 
          onChange={(event) => {
            this.setState({
              titleInput: event.target.value
            })
          }
        }/>
        <input type="text" placeholder="body" onChange={(event) => {
          this.setState({
            bodyInput: event.target.value
          })
        }}/>
        <button>Submit</button>
      </div>
    )
  }
}