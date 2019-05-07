import React from "react";
import "./words.css";
class Words extends React.PureComponent {
  render() {
    return (
      <ul className="chainList">
        {this.props.words.map(sentence => (
          <li id={sentence.counter}>{sentence.value}</li>
        ))}
      </ul>
    );
  }
}

export default Words;
