import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'semantic-ui-react';

const AddOptionModal = ({
  addOptionModalStatus,
  modalOpen,
  modalClose,
  handleChange,
  submitNewOption,
  currentOptionName,
  currentGroup,
  token,
}) => (
  <Modal
    trigger={
      <Button basic fluid color="teal" onClick={modalOpen}>
        Add Option
      </Button>
    }
    dimmer="blurring"
    open={addOptionModalStatus}
    onClose={modalClose}
    size="mini"
  >
    <Modal.Header>Add Option</Modal.Header>
    <Modal.Content>
      <Form>
        <Form.Input
          label="New Option Name"
          id="currentOptionName"
          value={currentOptionName}
          placeholder="Option Name"
          onChange={handleChange}
        />
        <Form.Button
          disabled={currentOptionName === ''}
          basic
          fluid
          color="green"
          onClick={() =>
            submitNewOption(token, currentGroup, currentOptionName)
          }
        >
          Submit
        </Form.Button>
      </Form>
    </Modal.Content>
  </Modal>
);

AddOptionModal.propTypes = {
  addOptionModalStatus: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitNewOption: PropTypes.func.isRequired,
  currentOptionName: PropTypes.string.isRequired,
  currentGroup: PropTypes.string,
  token: PropTypes.string.isRequired,
};

AddOptionModal.defaultProps = {
  currentGroup: PropTypes.string,
};

export default AddOptionModal;
