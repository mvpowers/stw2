import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Button, Message, Card } from 'semantic-ui-react';

const AdminVoteOptions = ({ options }) => (
  <Segment basic>
    <Button fluid basic color="teal">
      Add Option
    </Button>
    {options.length > 0 ? (
      <div className="additional-btn">
        {options.map(option => (
          <Card fluid key={option._id}>
            <Card.Content>
              <Card.Header>{option.name}</Card.Header>
            </Card.Content>
            <Card.Content>
              <Button basic fluid color="red">
                Remove Option
              </Button>
            </Card.Content>
          </Card>
        ))}
      </div>
    ) : (
      <Message warning>
        There are currently no vote options for this group
      </Message>
    )}
  </Segment>
);

AdminVoteOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default AdminVoteOptions;
