import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'semantic-ui-react';

const VoteModal = ({
  modalStatus,
  modalOpen,
  modalClose,
  voteId,
  voteName,
  displayName,
}) => (
  <Modal
    trigger={
      <Button
        basic
        fluid
        color="blue"
        onClick={modalOpen}
        id={voteId}
        name={voteName}
      >
        Select
      </Button>
    }
    dimmer="blurring"
    open={modalStatus}
    onClose={modalClose}
  >
    <Modal.Header>I never really liked {displayName} either</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Form>
          <Form.TextArea
            name="comment"
            placeholder="Leave a comment (optional)"
          />
          <Form.Button
            basic
            fluid
            color="green"
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
  voteId: PropTypes.string.isRequired,
  voteName: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default VoteModal;
