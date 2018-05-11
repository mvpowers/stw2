import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

const RemoveGroupModal = ({
  leaveModalStatus,
  modalOpen,
  modalClose,
  groupId,
  groupName,
  currentLeaveName,
}) => (
  <Modal
    trigger={
      <Button
        basic
        fluid
        color="red"
        onClick={modalOpen}
        id={groupId}
        name={groupName}
        action="leave"
      >
        Leave Group
      </Button>
    }
    dimmer="blurring"
    open={leaveModalStatus}
    onClose={modalClose}
    size="mini"
  >
    <Modal.Header>Leave Group</Modal.Header>
    <Modal.Content>
      <p>Are you sure you want to leave {`"${currentLeaveName}"`}?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        negative
        icon="remove"
        labelPosition="right"
        content="No"
        onClick={modalClose}
      />
      <Button positive icon="checkmark" labelPosition="right" content="Yes" />
    </Modal.Actions>
  </Modal>
);

RemoveGroupModal.propTypes = {
  leaveModalStatus: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  currentLeaveName: PropTypes.string.isRequired,
};

export default RemoveGroupModal;
