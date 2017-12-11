import React from 'react';
import { Dimmer, Header, Icon } from 'semantic-ui-react';

const WaitDimmer = () => (
  <Dimmer active={false}>
    <Header as="h2" icon inverted>
      <Icon name="circle notched" loading />
      Waiting for results
    </Header>
  </Dimmer>
);

export default WaitDimmer;
