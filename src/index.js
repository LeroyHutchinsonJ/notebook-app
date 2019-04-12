import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Example extends React.Component {
  state = {
    text: "",
    bubble: ""
  };

  takeText = event => {
    this.setState({ text: event.target.value });
  };

  makeChain = () => {
    this.setState({ bubble: this.state.text });
  };
  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.text} onChange={this.takeText} />
        <button className="newChainBtn" onClick={this.makeChain}>
          Create New Chain
        </button>
        <div className="textBubble">{this.state.bubble}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
