import React from 'react';
import { Card, Message, Button, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const GroupMemberOptions = ({ members }) => (
  <Segment basic>
    {members.length > 0 ? (
      members.map(member => (
        <Card fluid>
          <Card.Content>
            <Card.Header>{member.name}</Card.Header>
            <Card.Meta>User ID: {member.id}</Card.Meta>
          </Card.Content>
          <Card.Content>
            <Button fluid basic color="red">
              Remove User
            </Button>
          </Card.Content>
        </Card>
      ))
    ) : (
      <Message
        warning
        className="additional-btn"
        icon="remove"
        header="No Members"
        content="This group needs some members"
      />
    )}
  </Segment>
);

GroupMemberOptions.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default GroupMemberOptions;
