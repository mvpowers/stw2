import React from 'react';
import PropTypes from 'prop-types';
import { Card, Message, Label } from 'semantic-ui-react';
import {
  RemoveGroupModal,
  CreateGroupModal,
  JoinGroupModal,
  ErrorMessage,
} from './';

const GroupManage = ({
  groups,
  leaveModalStatus,
  modalOpen,
  modalClose,
  handleChange,
  currentLeaveName,
  createModalStatus,
  currentCreateName,
  joinModalStatus,
  currentJoinId,
  submitNewGroup,
  token,
  error,
  successMessage,
}) => (
  <div>
    {error.length > 0 && (
      <div className="additional-btn">
        <ErrorMessage header="Group Update Failed" errorArr={error} />
      </div>
    )}
    {successMessage && (
      <div className="additional-btn">
        <Message
          success
          header="Group Update Successful"
          content={successMessage}
        />
      </div>
    )}
    <div className="additional-btn">
      <JoinGroupModal
        joinModalStatus={joinModalStatus}
        currentJoinId={currentJoinId}
        modalOpen={modalOpen}
        modalClose={modalClose}
        handleChange={handleChange}
      />
    </div>
    <div className="additional-btn">
      <CreateGroupModal
        createModalStatus={createModalStatus}
        modalOpen={modalOpen}
        modalClose={modalClose}
        currentCreateName={currentCreateName}
        handleChange={handleChange}
        submitNewGroup={submitNewGroup}
        token={token}
      />
    </div>
    {groups.length === 0 && (
      <Message
        warning
        floating
        icon="remove"
        header="No Groups"
        content="Please join or create a group to get this party started"
      />
    )}
    {groups.map(group => (
      <Card fluid key={group._id}>
        <Card.Content>
          <Card.Header>{group.name}</Card.Header>
          <Card.Meta>{`Group ID: ${group.groupId}`}</Card.Meta>
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
  joinModalStatus: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitNewGroup: PropTypes.func.isRequired,
  currentLeaveName: PropTypes.string.isRequired,
  currentCreateName: PropTypes.string.isRequired,
  currentJoinId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  successMessage: PropTypes.string.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GroupManage;
