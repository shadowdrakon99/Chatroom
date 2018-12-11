import React, { Component } from 'react';
import BubbleChat from './BubbleChatMe'
import fillerMessages from './fillerMessages';

const messagesStyles = {
  width:"100vw",
  flex:1,
  display:"flex",
  flexDirection:"column",
  overflow:"auto",
  marginLeft:"10px"
}

class Messages extends Component {
  render(){
    const message1 = this.props.text1
    const message2 = this.props.text2
  return(
    <div style={messagesStyles}>
      { fillerMessages.map( v => <BubbleChat message={v.message} me={v.me} />)}
    </div>
  )

}
}
export default Messages
