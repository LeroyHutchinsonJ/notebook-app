import React from "react";
import ReactDOM from "react-dom";
import Words from "./words";
import "./styles.css";

class Bev extends React.Component {
  state = {
    text: "",
    bubble: []
  };
  counter = 0;

  makeBubble = () => {
    return {
      id: this.counter++,
      value: this.state.text
    };
  };

  takeText = event => {
    this.setState({ text: event.target.value });
  };

  addBubble = () => {
    this.setState({ bubble: [...this.state.bubble, this.makeBubble()] });
  };

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.text} onChange={this.takeText} />

        <button className="newChainBtn" onClick={this.addBubble}>
          Create New Chain
        </button>
        <Words words={this.state.bubble} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Bev />, rootElement);
