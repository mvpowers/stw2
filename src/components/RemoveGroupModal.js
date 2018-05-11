import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

const RemoveGroupModal = ({
  removeModalStatus,
  removeModalOpen,
  removeModalClose,
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
        onClick={removeModalOpen}
        id={groupId}
        name={groupName}
      >
        Leave Group
      </Button>
    }
    dimmer="blurring"
    open={removeModalStatus}
    onClose={removeModalClose}
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
        onClick={removeModalClose}
      />
      <Button positive icon="checkmark" labelPosition="right" content="Yes" />
    </Modal.Actions>
  </Modal>
);

RemoveGroupModal.propTypes = {
  removeModalStatus: PropTypes.bool.isRequired,
  removeModalOpen: PropTypes.func.isRequired,
  removeModalClose: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  currentLeaveName: PropTypes.string.isRequired,
};

export default RemoveGroupModal;
