import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Message, Card } from 'semantic-ui-react';
import { AddOptionModal, ErrorMessage, RemoveOptionModal } from './';

const AdminVoteOptions = ({
  addOptionModalStatus,
  currentGroup,
  currentOptionName,
  error,
  handleChange,
  modalClose,
  modalOpen,
  options,
  removeOptionId,
  removeOptionModalStatus,
  removeOptionName,
  submitDeleteOption,
  submitNewOption,
  successMessage,
  token,
}) => (
  <Segment basic>
    {successMessage && (
      <Message
        success
        header="Group Update Successful"
        content={successMessage}
      />
    )}
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
              <RemoveOptionModal
                modalClose={modalClose}
                modalOpen={modalOpen}
                removeOptionModalStatus={removeOptionModalStatus}
                removeOptionName={removeOptionName}
                removeOptionId={removeOptionId}
                optionName={option.name}
                optionId={option._id}
                submitDeleteOption={submitDeleteOption}
                token={token}
              />
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
  removeOptionModalStatus: PropTypes.bool.isRequired,
  submitNewOption: PropTypes.func.isRequired,
  submitDeleteOption: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  removeOptionName: PropTypes.string.isRequired,
  removeOptionId: PropTypes.string.isRequired,
  currentOptionName: PropTypes.string.isRequired,
  currentGroup: PropTypes.string,
  successMessage: PropTypes.string.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
};

AdminVoteOptions.defaultProps = {
  currentGroup: '',
};

export default AdminVoteOptions;
