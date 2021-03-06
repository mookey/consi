import React from 'react';
import Nav from '../components/nav';
import Header from '../components/header';

export default class AppComponent extends React.Component {

  componentDidMount() {
    console.log('app', this.props.children);
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Nav></Nav>
        { this.props.children }
      </div>
    );
  }
}