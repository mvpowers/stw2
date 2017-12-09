import React from 'react';
import { Container, Dimmer, Segment } from 'semantic-ui-react';
import Question from '../components/Question';
import VoteOptions from '../components/VoteOptions';
import WaitDimmer from '../components/WaitDimmer';

const VotePage = () => (
  <Dimmer.Dimmable as={Segment} basic>
    <WaitDimmer />
    <Question />
    <VoteOptions />
  </Dimmer.Dimmable>
);

export default VotePage;
