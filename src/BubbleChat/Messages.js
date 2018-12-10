import React, { Component } from 'react';
import BubbleChatThem from './BubbleChatThem'
import BubbleChatMe from './BubbleChatMe'


class Messages extends Component {
  render(){

    const message1 = this.props.text1
    const message2 = this.props.text2
  return(
    <div>
      <BubbleChatMe text={message1}/>

      <BubbleChatThem text1={message2}/>
    </div>
  )

}
}
export default Messages
