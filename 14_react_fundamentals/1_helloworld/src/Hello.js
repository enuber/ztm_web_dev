import React, { Component } from 'react';
import './Hello.css';

// Prop system, the Hello class has "properties" called props where we can pass things in. Because we aren't getting props directly we must call this.props to access them and, greeting is the prop name being passed in through in the index.js file. The { } allows you to add in an expression
class Hello extends Component {
  render() {
    return (
      <div className="f1 tc">
        <h1> Hello World </h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

export default Hello;
