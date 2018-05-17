import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'semantic-ui-react';

const JoinGroupModal = ({
  joinModalStatus,
  currentJoinId,
  modalOpen,
  modalClose,
  handleChange,
  token,
  submitJoinGroup,
}) => (
  <Modal
    trigger={
      <Button basic fluid color="purple" onClick={modalOpen} action="join">
        Join Group
      </Button>
    }
    dimmer="blurring"
    open={joinModalStatus}
    onClose={modalClose}
    size="mini"
  >
    <Modal.Header>Join Group</Modal.Header>
    <Modal.Content>
      <Form>
        <Form.Input
          label="Group's 6 Digit ID"
          id="currentJoinId"
          value={currentJoinId}
          placeholder="123123"
          onChange={handleChange}
        />
        <Form.Button
          disabled={currentJoinId === ''}
          basic
          fluid
          color="green"
          onClick={() => submitJoinGroup(token, currentJoinId)}
        >
          Submit
        </Form.Button>
      </Form>
    </Modal.Content>
  </Modal>
);

JoinGroupModal.propTypes = {
  joinModalStatus: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitJoinGroup: PropTypes.func.isRequired,
  currentJoinId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default JoinGroupModal;
