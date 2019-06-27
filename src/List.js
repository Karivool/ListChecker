import React, { Component } from 'react';
import ListChoices from './ListChoices.js';
import ListTitle from './ListTitle.js';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s01: 0,
      s02: 0,
      s03: 0,
      s04: 0,
      s05: 0,
      s06: 0,
      s07: 0,
      s08: 0,
      s09: 0,
      s10: 0,
      s11: 0,
      s12: 0,
      s13: 0,
      s14: 0,
      s15: 0,
      s16: 0,
      s17: 0,
      total: 0,
    };
    this.toggleChoice = this.toggleChoice.bind(this);
  }


  toggleChoice(section, event) {
    let sectCount = this.state[section];
    let allTotal = this.state.total;
    if (event.target.checked) {
      sectCount += 1
      allTotal += 1
      this.setState({
        [section]: sectCount,
        total: allTotal
      }, this.updateChange(section, sectCount, allTotal));
    } else {
      sectCount -= 1
      allTotal -= 1
      this.setState({
        [section]: sectCount,
        total: allTotal
      }, this.updateChange(section, sectCount, allTotal));
    }
  }

  updateChange(section, sectCount, allTotal) {
    console.log(sectCount);
    console.log(allTotal);
  }

  render() {
    const resultTotal = this.state.total;

    const listChoices = require('./choices.js');
    const listTitles = require('./titles.js');
    const listNames = [
      "s01", "s02", "s03", "s04", "s05", "s06",
      "s07", "s08", "s09", "s10", "s11", "s12",
      "s13", "s14", "s15", "s16", "s17", ];
    const listName1 = ["s01", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09"];
    const listName2 = ["s10", "s11", "s12", "s13", "s14", "s15", "s16", "s17"];
    return (
      <div className="list">
        <div className="results1">
          { listName1.map((option, idx) => {
              return (
                <span className="results-box1"
                  key={`${idx}-results-box1`}
                >
                {this.state[option]}
                </span>
              )
          })}
        </div>
        <div className="results2">
          { listName2.map((option, idx) => {
              return (
                <span className="results-box2"
                  key={`${idx}-results-box2`}
                >
                {this.state[option]}
                </span>
              )
          })}
        </div>
        <span className="results-total-box">Total: {resultTotal}/270 - Your score is {parseFloat(resultTotal/270*100).toFixed(2)}%</span>
        <div className="spacing"/>
        { listNames.map((option, idx) => {
            return (
              <div className="list-object" key={`list-object-${idx}`}>
                <ListTitle
                key={`${option}-select-title`}
                title={listTitles[option]}
                />
                <ListChoices
                key={`${option}-select`}
                section={option}
                action={this.toggleChoice}
                choices={listChoices[idx]}
                />
              </div>
            )
        })
      }
      </div>
    )
  }
}

export default List;
