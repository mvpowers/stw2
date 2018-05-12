import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'semantic-ui-react';

const CreateGroupModal = ({
  createModalStatus,
  modalOpen,
  modalClose,
  handleChange,
  currentCreateName,
  submitNewGroup,
  token,
}) => (
  <Modal
    trigger={
      <Button basic fluid color="pink" onClick={modalOpen} action="create">
        Create Group
      </Button>
    }
    dimmer="blurring"
    open={createModalStatus}
    onClose={modalClose}
    size="mini"
  >
    <Modal.Header>Create Group</Modal.Header>
    <Modal.Content>
      <Form>
        <Form.Input
          label="New Group Name"
          id="currentCreateName"
          value={currentCreateName}
          placeholder="Group Name"
          onChange={handleChange}
        />
        <Form.Button
          disabled={currentCreateName === ''}
          basic
          fluid
          color="green"
          onClick={() => submitNewGroup(token, currentCreateName)}
        >
          Submit
        </Form.Button>
      </Form>
    </Modal.Content>
  </Modal>
);

CreateGroupModal.propTypes = {
  createModalStatus: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitNewGroup: PropTypes.func.isRequired,
  currentCreateName: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default CreateGroupModal;
