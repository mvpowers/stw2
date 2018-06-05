import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { VoteModal } from '../components';

const Groups = ({
  options,
  modalStatus,
  modalOpen,
  modalClose,
  currentVoteName,
  currentComment,
  handleSubmit,
  handleChange,
  groupId,
}) => (
  <Card.Group itemsPerRow={1}>
    {options.map(option => (
      <Card key={option._id}>
        <Card.Content>
          <Card.Header>{option.name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <VoteModal
            modalStatus={modalStatus}
            modalOpen={modalOpen}
            modalClose={modalClose}
            voteId={option._id}
            voteName={option.name}
            groupId={groupId}
            currentVoteName={currentVoteName}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            currentComment={currentComment}
          />
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

Groups.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  modalStatus: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  currentVoteName: PropTypes.string.isRequired,
  currentComment: PropTypes.string.isRequired,
  groupId: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Groups;
