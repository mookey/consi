import React from 'react';

export default class AboutComponent extends React.Component {

  componentDidMount() {
    console.log('aaaabout');
  }

  render() {
    return (
      <div>
        <h2>There is a fucker in the house</h2>
        <p className="sub-header">Bacon ipsum dolor amet corned beef meatloaf fatback, t-bone picanha andouille chuck beef ribs turducken sirloin rump shankle bacon jerky short ribs. Meatball porchetta ham hock turkey. </p>
        <p>
          Andouille flank filet mignon kielbasa, meatloaf bresaola hamburger shankle. Beef chuck ball tip, t-bone pig fatback frankfurter turkey flank sausage pork chop pork loin porchetta. Alcatra chicken ball tip jowl hamburger porchetta strip steak doner leberkas rump pork chop drumstick. Tail pork loin ham cupim rump biltong filet mignon sausage pig leberkas swine tenderloin spare ribs.
        </p>
      </div>
    );
  }
}