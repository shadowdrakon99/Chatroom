import React, { Component } from 'react';
import TextInput from './Chatbox/TextInput';
import Header from './Header/Header';
import Messages from './BubbleChat/Messages'
import ModalText from './Modal/ModalText';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div/>
    );
  }
}

class App2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
     screenName: ""
    }

  }

  setScreenName(screenName){
    this.setState({ screenName });
  }

  render() {

    return(
      <div className="App">
        <ModalText onSetScreenName = {this.setScreenName.bind(this)} />
        <Header screenName={this.state.screenName} />
        <Messages />
        <TextInput />


      </div>
    )

  }
}

export default App2;
