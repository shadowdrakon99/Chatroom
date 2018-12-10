import React, { Component } from 'react';
import TextInput from './Chatbox/TextInput';
import Header from './Header/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <UserIcon/>
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
