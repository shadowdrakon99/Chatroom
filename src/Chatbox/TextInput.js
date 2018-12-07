import React, { Component } from 'react';
import "./index.css"

class TextInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messageInput: ""
    }

  }

  handleChangeMessageText(e) {
    this.setState({ messageInput:e.target.value });
  }

  handleSendMessage() {
    // TODO: send to server via AJAX request ...

    // alert(this.state.messageInput)
  }

  render() {

    return (
      <div className = "message-input" >
        <input onChange={this.handleChangeMessageText.bind(this)} value={ this.state.messageInput } />
        <button onClick={this.handleSendMessage.bind(this)} />
      </div>
    )

  }

}

export default TextInput
