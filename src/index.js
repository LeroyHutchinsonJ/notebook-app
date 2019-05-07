import React from "react";
import ReactDOM from "react-dom";
import Words from "./words";
import "./styles.css";

//Creates a class
class App extends React.Component {
  //Adds state to the class, a string and an array
  state = {
    text: "",
    bubble: []
  };
  //Sets a counter to use for the array value id
  counter = 0;

  //Function that takes text that is inputed, and sets it to text in state
  takeText = event => {
    this.setState({ text: event.target.value });
  };

  //Creates a function that generates a value and id for each member of the array, the value would be whatever is inside of text
  makeBubble = () => {
    return {
      id: this.counter++,
      value: this.state.text
    };
  };

  //Function that adds the ID and Value generated to the bubble array
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
        <Words texts={this.state.bubble} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
