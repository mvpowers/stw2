import React, { Component } from 'react';
import { Segment, Tab, Header, Icon } from 'semantic-ui-react';

class AdminGroupManage extends Component {
  render() {
    const panes = [
      {
        menuItem: {
          key: 'voteOptions',
          icon: 'street view',
          content: 'Vote Options',
        },
        render: () => <div>pane one</div>,
      },
      {
        menuItem: { key: 'users', icon: 'users', content: 'Users' },
        render: () => <div>pane two</div>,
      },
    ];

    return (
      <Segment>
        <Header as="h2" icon textAlign="center">
          <Icon name="cubes" size="mini" circular />
          <Header.Content>Group Hello World</Header.Content>
          <Header.Subheader>Group ID: 45</Header.Subheader>
        </Header>
        <Tab panes={panes} />
      </Segment>
    );
  }
}

export default AdminGroupManage;
