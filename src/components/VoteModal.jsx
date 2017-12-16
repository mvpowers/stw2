import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

const VoteButton = () => (
  <Button basic fluid color="blue">Select</Button>
);

const VoteModal = () => (
  <Modal trigger={VoteButton()} dimmer="blurring">
    <Modal.Header>I never really liked him either</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Form>
          <Form.TextArea placeholder="Leave a comment (optional)" />
          <Form.Button basic fluid color="green">Submit</Form.Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default VoteModal;
