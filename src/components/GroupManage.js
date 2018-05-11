import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';
import { RemoveGroupModal, CreateGroupModal } from './';

const GroupManage = ({
  groups,
  leaveModalStatus,
  modalOpen,
  modalClose,
  handleChange,
  currentLeaveName,
  createModalStatus,
  currentCreateName,
}) => (
  <div>
    <Button basic color="purple" fluid className="additional-btn">
      Join Group
    </Button>
    <div className="additional-btn">
      <CreateGroupModal
        createModalStatus={createModalStatus}
        modalOpen={modalOpen}
        modalClose={modalClose}
        currentCreateName={currentCreateName}
        handleChange={handleChange}
      />
    </div>
    {groups.map(group => (
      <Card fluid key={group._id}>
        <Card.Content>
          <Card.Header>{group.name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <RemoveGroupModal
            modalClose={modalClose}
            modalOpen={modalOpen}
            handleChange={handleChange}
            leaveModalStatus={leaveModalStatus}
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
  leaveModalStatus: PropTypes.bool.isRequired,
  createModalStatus: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentLeaveName: PropTypes.string.isRequired,
  currentCreateName: PropTypes.string.isRequired,
};

export default GroupManage;
