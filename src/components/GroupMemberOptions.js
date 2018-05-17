import React from 'react';
import { Card, Message, Segment, Divider, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { RemoveMemberModal } from './';

const GroupMemberOptions = ({
  pendingMembers,
  acceptedMembers,
  token,
  removeMemberModalStatus,
  modalOpen,
  modalClose,
  submitDeleteMember,
  removeMemberName,
  removeMemberId,
  currentGroup,
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
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
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
              removeMemberModalStatus={removeMemberModalStatus}
              modalOpen={modalOpen}
              modalClose={modalClose}
              token={token}
              memberName={member.name}
              memberId={member.id}
              submitDeleteMember={submitDeleteMember}
              removeMemberName={removeMemberName}
              removeMemberId={removeMemberId}
              currentGroup={currentGroup}
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
  pendingMembers: PropTypes.arrayOf(
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
  currentGroup: PropTypes.string.isRequired,
};

export default GroupMemberOptions;
