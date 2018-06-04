import React from 'react';
import Idea from './Idea.js';

const IdeaContainer = props => {
  return (
    <div className="IdeaContainer">
      {props.children}
    </div>
  )
}

export default IdeaContainer