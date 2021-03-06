import React, { Component } from 'react';
import './index.css'

 class ModalText extends Component {


  constructor(props) {
    super(props);
     this.state = {
      modalVisible: true,
      textInput: ""
  }
}


handleButtonClick() {
  if(this.state.textInput==="") return;
  // TODO: set the contents of textinput to screenname in AppJS
  this.props.onSetScreenName(this.state.textInput)
  this.setState({modalVisible: false});
}


  renderTextInput(e) {
    this.setState({ textInput:e.target.value });
  }

  render() {

      const { modalVisible } = this.state;
      const modalDisplay = modalVisible ? "flex" : "none"

      return (
        <div className = "modal-container" style={{ display: modalDisplay }}>
          <div className = "modal-input">
            <text> Enter your name: </text>
            <input onChange={this.renderTextInput.bind(this)} value={ this.state.textInput } />
            <button onClick={this.handleButtonClick.bind(this)}>Enter </button>
          </div>
        </div>

      )
    }
  }


  export default ModalText
