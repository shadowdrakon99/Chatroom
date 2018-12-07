import React, { Component } from 'react';
import TextInput from './Chatbox/TextInput';
import Header from './Header/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class App2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      screenName: "Bob" || ""
    }

  }

  render() {

    return(
      <div>
        <Header screenName={this.state.screenName} />
        <TextInput />
      </div>
    )

  }
}

export default App2;
