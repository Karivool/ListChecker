import React, { Component } from 'react';

class ListChoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: props.choices,
      section: props.section,
      action: props.action,
    };
  }

  render() {
    const choices = this.state.choices;
    const section = this.state.section;
    return (
      <div className="list-item">
        { choices.map((option, idx) => {
            return (
              <div className="single-option" key={`single-option-${idx}`}>
                <input type="checkbox"
                  id={`${section}-${idx}`}
                  name={option}
                  onChange={this.state.action.bind(this, section)}
                >
                </input>
                <label className="label-option" htmlFor={`${section}-${idx}`}>{option}</label>
              </div>
            )
        })
      }
      </div>
    )
  }
}

export default ListChoices;
