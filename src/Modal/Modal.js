import React, { Component } from 'react';
import {Modal, TextInput} from 'react-native';

export default class Modal extends Component {

  constructor(props) {
    super(props);
     this.state = {
    modalVisible: false,
    textInput: ""
  };

  this.renderInput = this.renderInput.bind(this);

}

setModalVisible(visible = false) {
  this.setState({modalVisible: visible, textInput:""})
}


renderTextInput(textInput) {

    this.setState({ textInput:e.target.value });
  }






  render() {


      return (
        <div>
          <input onChange={this.renderTextInput.bind(this)} value={ this.state.textInput } />
          </div>

      )
    }
