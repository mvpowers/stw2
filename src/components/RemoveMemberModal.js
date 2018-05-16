import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

const RemoveMemberModal = ({
  removeMemberModalStatus,
  modalOpen,
  modalClose,
  token,
  memberName,
  memberId,
  submitDeleteMember,
  removeMemberName,
  removeMemberId,
  currentGroup,
}) => (
  <Modal
    trigger={
      <Button
        basic
        fluid
        color="red"
        onClick={modalOpen}
        action="removeMember"
        id={memberId}
        name={memberName}
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
        negative
        icon="remove"
        labelPosition="right"
        content="No"
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
  removeMemberModalStatus: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  submitDeleteMember: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  removeMemberName: PropTypes.string.isRequired,
  removeMemberId: PropTypes.string.isRequired,
  memberName: PropTypes.string.isRequired,
  memberId: PropTypes.string.isRequired,
  currentGroup: PropTypes.string.isRequired,
};

export default RemoveMemberModal;
