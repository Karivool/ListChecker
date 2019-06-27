import React, { Component } from 'react';

class ListTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  render() {
    const title = this.state.title;
    
    return (
      <div className="list-title">
        {title}
      </div>
    )
  }
}

export default ListTitle;
