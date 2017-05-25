import React, { Component } from 'react';
import './home.css';

export default class Home extends Component {

  render() {
    const { router } = this.props;
    return (
      <h1>This is home</h1>
    );
  }
}
