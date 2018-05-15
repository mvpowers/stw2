import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

const RemoveOptionModal = ({
  removeOptionModalStatus,
  modalOpen,
  modalClose,
  token,
  optionName,
  optionId,
  submitDeleteOption,
  removeOptionName,
  removeOptionId,
}) => (
  <Modal
    trigger={
      <Button
        basic
        fluid
        color="red"
        onClick={modalOpen}
        action="removeOption"
        id={optionId}
        name={optionName}
      >
        Remove Option
      </Button>
    }
    dimmer="blurring"
    open={removeOptionModalStatus}
    onClose={modalClose}
    size="mini"
  >
    <Modal.Header>Remove Option</Modal.Header>
    <Modal.Content>
      <p>
        Are you sure you want to remove
        <span className="emphasize"> {removeOptionName}?</span>
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
        onClick={() => submitDeleteOption(token, removeOptionId)}
      />
    </Modal.Actions>
  </Modal>
);

RemoveOptionModal.propTypes = {
  removeOptionModalStatus: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  submitDeleteOption: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  removeOptionName: PropTypes.string.isRequired,
  removeOptionId: PropTypes.string.isRequired,
  optionName: PropTypes.string.isRequired,
  optionId: PropTypes.string.isRequired,
};

export default RemoveOptionModal;
