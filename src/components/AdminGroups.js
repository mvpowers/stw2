import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Icon, Card, Button } from 'semantic-ui-react';

const AdminGroups = ({ groups, navigateToGroup }) => (
  <Segment basic>
    <Header as="h2" icon textAlign="center">
      <Icon name="pencil" circular />
      <Header.Content>Admin Panel</Header.Content>
    </Header>
    {groups.map(group => (
      <Card fluid key={group.groupId}>
        <Card.Content>
          <Card.Header>{group.name}</Card.Header>
          <Card.Meta>Group ID: {group.groupId}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <Button
            fluid
            basic
            color="blue"
            id={group.groupId}
            onClick={navigateToGroup}
          >
            Edit Group
          </Button>
        </Card.Content>
      </Card>
    ))}
  </Segment>
);

AdminGroups.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.name,
    }),
  ).isRequired,
  navigateToGroup: PropTypes.func.isRequired,
};

export default AdminGroups;
