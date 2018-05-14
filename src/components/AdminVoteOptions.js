import React from 'react';
import { Segment, Button, Message } from 'semantic-ui-react';

const AdminVoteOptions = ({ options }) => (
  <Segment basic>
    <Button fluid basic color="teal">
      Add Option
    </Button>
    {options ? (
      <div>{JSON.stringify(options)}</div>
    ) : (
      <Message warning>
        There are currently no vote options for this group
      </Message>
    )}
  </Segment>
);

export default AdminVoteOptions;
