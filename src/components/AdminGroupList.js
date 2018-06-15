import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Segment,
  Header,
  Icon,
  Card,
  Button,
  Message,
} from 'semantic-ui-react';
import { fetchAdminGroups } from '../store/group/actions';
import { Wait } from './';

class AdminGroupList extends Component {
  componentDidMount() {
    const { user, history, fetchAdminGroups } = this.props;
    if (!user.token) {
      history.push('/login');
    }
    fetchAdminGroups(user.token);
  }

  navigateToGroup = e => {
    const { history } = this.props;
    history.push(`/admin/${e.target.id}`);
  };

  render() {
    const { groups } = this.props;
    return (
      <div>
        {groups.pending ? (
          <Wait />
        ) : (
          <Segment basic>
            <Header as="h2" icon textAlign="center">
              <Icon name="pencil" circular />
              <Header.Content>Admin Panel</Header.Content>
            </Header>
            {groups.adminGroups.map(group => (
              <Card fluid key={group.groupId}>
                <Card.Content>
                  <Card.Header>{group.name}</Card.Header>
                  <Card.Meta>Group ID: {group.groupId}</Card.Meta>
                  <Card.Meta>Members: {group.members}</Card.Meta>
                </Card.Content>
                {(group.members === 0 || group.options === 0) && (
                  <Message warning attached>
                    <Message.Header>Group Needs Some Attention</Message.Header>
                    <Message.List>
                      {group.members === 0 && (
                        <Message.Item>
                          No members have joined this group
                        </Message.Item>
                      )}
                      {group.options === 0 && (
                        <Message.Item>
                          No vote options are available
                        </Message.Item>
                      )}
                    </Message.List>
                  </Message>
                )}
                <Card.Content>
                  <Button
                    fluid
                    basic
                    color="blue"
                    id={group.groupId}
                    onClick={this.navigateToGroup}
                  >
                    Edit Group
                  </Button>
                </Card.Content>
              </Card>
            ))}
          </Segment>
        )}
      </div>
    );
  }
}

AdminGroupList.propTypes = {
  groups: PropTypes.shape({
    adminGroups: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        groupId: PropTypes.string,
      }),
    ),
  }).isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  fetchAdminGroups: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  groups: state.groups,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAdminGroups,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(AdminGroupList);
