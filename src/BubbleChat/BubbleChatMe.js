import React, { Component } from 'react';


class BubbleChatMe extends Component {
  render(){
    const message = this.props.text
  return(

        <div style= {{float:'left',borderStyle:'solid',width:'90px', borderRadius: '10px'}} >
        {message}
        </div>

  )

}
}
export default BubbleChatMe
