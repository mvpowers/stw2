import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const NoData = () => (
  <Header as="h2" icon>
    <Icon name="meh" />
    No Data
    <Header.Subheader>Something went incredibly wrong.</Header.Subheader>
  </Header>
);

export default NoData;
