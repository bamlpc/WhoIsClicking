import React, { Component } from 'react';

//class Hunter extends Component {
//  render() {
//    return (
//      <div>
//        <h1>Hunter</h1>
//      </div>
//    );
//  }
//}

const Hunter = (props) => {

  return (
  <div>
    <h1>Hunter {props.name} </h1>
    {props.children}
  </div>
  )
}

export default Hunter;