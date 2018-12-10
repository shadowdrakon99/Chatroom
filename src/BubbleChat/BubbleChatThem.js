import React, { Component } from 'react';


class BubbleChatThem extends Component {
  render(){
        const message = this.props.text1
  return(

        <div style= {{alignItems:'baseline',borderStyle:'solid',width:'90px', borderRadius: '10px'}} >
        {message}
        </div>


  )

}
}
export default BubbleChatThem
