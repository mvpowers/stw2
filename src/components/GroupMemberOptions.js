import React from 'react';
import { Card, Message, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { RemoveMemberModal } from './';

const GroupMemberOptions = ({
  members,
  token,
  removeMemberModalStatus,
  modalOpen,
  modalClose,
  submitDeleteMember,
  removeMemberName,
  removeMemberId,
}) => (
  <Segment basic>
    {members.length > 0 ? (
      members.map(member => (
        <Card fluid key={member.id}>
          <Card.Content>
            <Card.Header>{member.name}</Card.Header>
            <Card.Meta>User ID: {member.id}</Card.Meta>
          </Card.Content>
          <Card.Content>
            <RemoveMemberModal
              removeMemberModalStatus={removeMemberModalStatus}
              modalOpen={modalOpen}
              modalClose={modalClose}
              token={token}
              memberName={member.name}
              memberId={member.id}
              submitDeleteMember={submitDeleteMember}
              removeMemberName={removeMemberName}
              removeMemberId={removeMemberId}
            />
          </Card.Content>
        </Card>
      ))
    ) : (
      <Message
        warning
        className="additional-btn"
        icon="remove"
        header="No Members"
        content="This group needs some members"
      />
    )}
  </Segment>
);

GroupMemberOptions.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  removeMemberModalStatus: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  submitDeleteMember: PropTypes.func.isRequired,
  removeMemberName: PropTypes.string.isRequired,
  removeMemberId: PropTypes.string.isRequired,
};

export default GroupMemberOptions;
