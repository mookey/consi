import React from 'react';

export default class IndexComponent extends React.Component {

  componentDidMount() {
    console.log('index');
  }

  render() {
    return (
      <div>
        <p>This is the ooondex page</p>
      </div>
    );
  }

}