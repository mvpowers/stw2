import React from 'react';
import { Card, Message, Segment, Divider, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { RemoveMemberModal } from './';

const GroupMemberOptions = ({
  acceptedMembers,
  approvePendingMember,
  currentGroup,
  declinePendingMember,
  modalClose,
  modalOpen,
  pendingMembers,
  removeMemberId,
  removeMemberModalStatus,
  removeMemberName,
  submitDeleteMember,
  token,
  userId,
}) => (
  <Segment basic>
    {pendingMembers.length > 0 && (
      <Divider horizontal section>
        Pending
      </Divider>
    )}
    {pendingMembers.map(member => (
      <Card fluid key={member.id}>
        <Card.Content>
          <Card.Header>{member.name}</Card.Header>
          <Card.Meta>User ID: {member.id}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                basic
                color="green"
                onClick={() =>
                  approvePendingMember(token, currentGroup, member.id)
                }
              >
                Approve
              </Button>
              <Button
                basic
                color="red"
                onClick={() =>
                  declinePendingMember(token, currentGroup, member.id)
                }
              >
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card.Content>
      </Card>
    ))}
    {acceptedMembers.length > 0 && (
      <Divider horizontal section>
        Accepted
      </Divider>
    )}
    {acceptedMembers.length > 0 &&
      acceptedMembers.map(member => (
        <Card fluid key={member.id}>
          <Card.Content>
            <Card.Header>{member.name}</Card.Header>
            <Card.Meta>User ID: {member.id}</Card.Meta>
          </Card.Content>
          <Card.Content>
            <RemoveMemberModal
              currentGroup={currentGroup}
              memberId={member.id}
              memberName={member.name}
              modalClose={modalClose}
              modalOpen={modalOpen}
              removeMemberId={removeMemberId}
              removeMemberModalStatus={removeMemberModalStatus}
              removeMemberName={removeMemberName}
              submitDeleteMember={submitDeleteMember}
              token={token}
              userId={userId}
            />
          </Card.Content>
        </Card>
      ))}
    {pendingMembers.length + acceptedMembers.length === 0 && (
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
  acceptedMembers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  approvePendingMember: PropTypes.func.isRequired,
  currentGroup: PropTypes.string.isRequired,
  declinePendingMember: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  modalOpen: PropTypes.func.isRequired,
  pendingMembers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  removeMemberId: PropTypes.string.isRequired,
  removeMemberModalStatus: PropTypes.bool.isRequired,
  removeMemberName: PropTypes.string.isRequired,
  submitDeleteMember: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default GroupMemberOptions;
