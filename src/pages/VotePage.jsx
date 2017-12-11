import React, { Component } from 'react';
import { Dimmer, Segment } from 'semantic-ui-react';
import Question from '../components/Question';
import VoteOptions from '../components/VoteOptions';
import WaitDimmer from '../components/WaitDimmer';

class VotePage extends Component {
  render() {
    return (
      <Dimmer.Dimmable as={Segment} basic>
        <WaitDimmer />
        <Question />
        <VoteOptions />
      </Dimmer.Dimmable>
    );
  }
}

export default VotePage;
