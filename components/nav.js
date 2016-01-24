import React from 'react';
import { Link } from 'react-router';

export default class NavComponent extends React.Component {

  componentDidMount() {
    console.log('nav', this.props.children);
  }

  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    );
  }
}