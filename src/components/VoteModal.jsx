import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'semantic-ui-react';


const VoteModal = ({
  modalStatus,
  modalOpen,
  modalClose,
  handleCommentChange,
  option,
}) => (
  <Modal
    trigger={
      <Button
        basic
        fluid
        color="blue"
        user={option}
        onClick={modalOpen}
      >
      Select
      </Button>}
    dimmer="blurring"
    open={modalStatus}
    onClose={modalClose}
  >
    <Modal.Header>I never really liked him either</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Form>
          <Form.TextArea
            name="comment"
            placeholder="Leave a comment (optional)"
            onChange={handleCommentChange}
          />
          <Form.Button
            basic
            fluid
            color="green"
            option={option}
            onClick={modalClose}
          >
            Submit
          </Form.Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

VoteModal.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  handleCommentChange: PropTypes.func.isRequired,
  option: PropTypes.number.isRequired,
}

export default VoteModal;
