import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import VoteModal from './VoteModal';

const data = [
  { id: 1, name: 'Timmy', description: 'The one with the man-bun' },
  { id: 2, name: 'George', description: 'Eats frozen dinners for breakfast' },
  { id: 3, name: 'Larry', description: 'Dresses cats up for halloween' },
];

const VoteOptions = ({
  modalStatus,
  modalOpen,
  modalClose,
  handleCommentChange,
  handleVoteIdChange,
}) => (
  <Card.Group itemsPerRow={1}>
    {data.map(option =>
      (
        <Card key={option.id}>
          <Card.Content>
            <Card.Header>
              {option.name}
            </Card.Header>
            <Card.Meta>
              {option.description}
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <VoteModal
              modalStatus={modalStatus}
              modalOpen={modalOpen}
              modalClose={modalClose}
              handleCommentChange={handleCommentChange}
              option={option.id}
              handleVoteIdChange={handleVoteIdChange}
            />
          </Card.Content>
        </Card>
      ))}
  </Card.Group>
);

VoteOptions.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  handleCommentChange: PropTypes.func.isRequired,
  handleVoteIdChange: PropTypes.func.isRequired,
};

export default VoteOptions;
