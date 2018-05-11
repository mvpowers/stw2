import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';
import { RemoveGroupModal } from './';

const GroupManage = ({
  groups,
  removeModalStatus,
  removeModalOpen,
  removeModalClose,
  currentLeaveName,
}) => (
  <div>
    <Button basic color="green" fluid className="additional-btn">
      Join Group
    </Button>
    <Button basic color="pink" fluid className="additional-btn">
      Create Group
    </Button>
    {groups.map(group => (
      <Card fluid key={group._id}>
        <Card.Content>
          <Card.Header>{group.name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <RemoveGroupModal
            removeModalClose={removeModalClose}
            removeModalOpen={removeModalOpen}
            removeModalStatus={removeModalStatus}
            groupId={group._id}
            groupName={group.name}
            currentLeaveName={currentLeaveName}
          />
        </Card.Content>
      </Card>
    ))}
  </div>
);

GroupManage.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  removeModalStatus: PropTypes.bool.isRequired,
  removeModalOpen: PropTypes.func.isRequired,
  removeModalClose: PropTypes.func.isRequired,
};

export default GroupManage;
