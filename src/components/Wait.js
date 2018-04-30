import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const Wait = () => (
  <div>
    <Header as="h2" icon className="wait">
      <Icon name="circle notched" loading />
      Waiting for results
    </Header>
  </div>
);

export default Wait;
