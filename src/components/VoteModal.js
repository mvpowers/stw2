import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'semantic-ui-react';

const VoteModal = ({
  modalStatus,
  modalOpen,
  modalClose,
  voteId,
  voteName,
  currentVoteName,
  handleSubmit,
  handleChange,
  currentComment,
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
    <Modal.Header>I never really liked {currentVoteName} either</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Form>
          <Form.TextArea
            name="currentComment"
            value={currentComment}
            placeholder="Leave a comment (optional)"
            onChange={handleChange}
          />
          <Form.Button basic fluid color="green" onClick={handleSubmit}>
            Submit
          </Form.Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

VoteModal.defaultProps = {
  currentComment: '',
};

VoteModal.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  voteId: PropTypes.string.isRequired,
  voteName: PropTypes.string.isRequired,
  currentVoteName: PropTypes.string.isRequired,
  currentComment: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default VoteModal;
