import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

const RemoveMemberModal = ({
  currentGroup,
  memberId,
  memberName,
  modalClose,
  modalOpen,
  removeMemberId,
  removeMemberModalStatus,
  removeMemberName,
  submitDeleteMember,
  token,
  userId,
}) => (
  <Modal
    trigger={
      <Button
        action="removeMember"
        basic
        color="red"
        disabled={memberId === userId}
        fluid
        id={memberId}
        name={memberName}
        onClick={modalOpen}
      >
        Remove Member
      </Button>
    }
    dimmer="blurring"
    open={removeMemberModalStatus}
    onClose={modalClose}
    size="mini"
  >
    <Modal.Header>Remove Option</Modal.Header>
    <Modal.Content>
      <p>
        Are you sure you want to remove
        <span className="emphasize"> {removeMemberName}?</span>
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        content="No"
        icon="remove"
        labelPosition="right"
        negative
        onClick={modalClose}
      />
      <Button
        positive
        icon="checkmark"
        labelPosition="right"
        content="Yes"
        onClick={() => submitDeleteMember(token, currentGroup, removeMemberId)}
      />
    </Modal.Actions>
  </Modal>
);

RemoveMemberModal.propTypes = {
  currentGroup: PropTypes.string.isRequired,
  modalClose: PropTypes.func.isRequired,
  modalOpen: PropTypes.func.isRequired,
  memberId: PropTypes.string.isRequired,
  memberName: PropTypes.string.isRequired,
  removeMemberId: PropTypes.string.isRequired,
  removeMemberModalStatus: PropTypes.bool.isRequired,
  removeMemberName: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  submitDeleteMember: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default RemoveMemberModal;
