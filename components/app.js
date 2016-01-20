import React from 'react';
import { Link } from 'react-router';

export default class AppComponent extends React.Component {

  componentDidMount() {
    console.log('evil');
  }

  render() {
    return (
      <div>
        <h1><em>the</em> Fuckables</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}