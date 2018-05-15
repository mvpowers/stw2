import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Button, Message, Card } from 'semantic-ui-react';
import { AddOptionModal, ErrorMessage } from './';

const AdminVoteOptions = ({
  options,
  submitNewOption,
  addOptionModalStatus,
  modalOpen,
  modalClose,
  handleChange,
  token,
  currentOptionName,
  currentGroup,
  error,
}) => (
  <Segment basic>
    {error.length > 0 && (
      <ErrorMessage header="Group Update Failed" errorArr={error} />
    )}
    <AddOptionModal
      addOptionModalStatus={addOptionModalStatus}
      modalOpen={modalOpen}
      modalClose={modalClose}
      handleChange={handleChange}
      submitNewOption={submitNewOption}
      currentOptionName={currentOptionName}
      token={token}
      currentGroup={currentGroup}
    />
    {options.length > 0 ? (
      <div className="additional-btn">
        {options.map(option => (
          <Card fluid key={option._id}>
            <Card.Content>
              <Card.Header>{option.name}</Card.Header>
            </Card.Content>
            <Card.Content>
              <Button basic fluid color="red">
                Remove Option
              </Button>
            </Card.Content>
          </Card>
        ))}
      </div>
    ) : (
      <Message warning>
        There are currently no vote options for this group
      </Message>
    )}
  </Segment>
);

AdminVoteOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  addOptionModalStatus: PropTypes.bool.isRequired,
  submitNewOption: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  currentOptionName: PropTypes.string.isRequired,
  currentGroup: PropTypes.string.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AdminVoteOptions;
