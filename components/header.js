import React from 'react';

export default class AppComponent extends React.Component {

  componentDidMount() {
    console.log('app', this.props.children);
  }

  render() {
    return (
      <div className="header">
        <h1><em>the</em> Fuckables</h1>
      </div>
    );
  }
}