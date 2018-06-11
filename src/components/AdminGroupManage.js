import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AdminVoteOptions, Wait, GroupMemberOptions } from './';
import {
  fetchSingleAdminGroup,
  addOption,
  removeVoteOption,
  removeMember,
  confirmPendingMember,
  declinePendingMember,
} from '../store/group/actions';

class AdminGroupManage extends Component {
  constructor() {
    super();
    this.state = {
      currentOptionName: '',
      addOptionModalStatus: false,
      removeOptionModalStatus: false,
      removeMemberModalStatus: false,
      removeOptionName: '',
      removeOptionId: '',
      removeMemberName: '',
      removeMemberId: '',
    };
  }

  componentDidMount() {
    const { groupId, user, history, fetchSingleAdminGroup } = this.props;
    if (!user.token) history.push('/login');
    fetchSingleAdminGroup(user.token, groupId);
  }

  submitNewOption = (token, groupId, name) => {
    const { addOption } = this.props;
    addOption(token, groupId, name);
    this.setState({ addOptionModalStatus: false });
  };

  submitDeleteOption = (token, optionId) => {
    const { removeVoteOption } = this.props;
    removeVoteOption(token, optionId);
    this.setState({ removeOptionModalStatus: false });
  };

  submitDeleteMember = (token, groupId, memberId) => {
    const { removeMember } = this.props;
    removeMember(token, groupId, memberId);
    this.setState({ removeMemberModalStatus: false });
  };

  approvePendingMember = (token, groupId, memberId) => {
    const { confirmPendingMember } = this.props;
    confirmPendingMember(token, groupId, memberId);
  };

  declinePendingMember = (token, groupId, memberId) => {
    const { declinePendingMember } = this.props;
    declinePendingMember(token, groupId, memberId);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  modalOpen = e => {
    switch (e.target.getAttribute('action')) {
      case 'addOption':
        return this.setState({ addOptionModalStatus: true });

      case 'removeOption':
        return this.setState({
          removeOptionModalStatus: true,
          removeOptionName: e.target.name,
          removeOptionId: e.target.id,
        });

      case 'removeMember':
        return this.setState({
          removeMemberModalStatus: true,
          removeMemberName: e.target.name,
          removeMemberId: e.target.id,
        });

      default:
        return null;
    }
  };

  modalClose = () => {
    this.setState({
      addOptionModalStatus: false,
      removeOptionModalStatus: false,
      removeMemberModalStatus: false,
    });
  };

  filterPending = memberArr => memberArr.filter(member => member.pending);

  filterAccepted = memberArr => memberArr.filter(member => !member.pending);

  render() {
    const { groups, user } = this.props;
    const {
      currentOptionName,
      removeOptionName,
      removeOptionId,
      removeMemberName,
      removeMemberId,
      addOptionModalStatus,
      removeOptionModalStatus,
      removeMemberModalStatus,
    } = this.state;
    const panes = [
      {
        menuItem: {
          key: 'voteOptions',
          icon: 'street view',
          content: 'Vote Options',
        },
        render: () => (
          <AdminVoteOptions
            options={groups.editAdminGroup.options}
            currentGroup={groups.editAdminGroup._id}
            currentOptionName={currentOptionName}
            removeOptionName={removeOptionName}
            removeOptionId={removeOptionId}
            token={user.token}
            error={groups.error}
            successMessage={groups.successMessage}
            addOptionModalStatus={addOptionModalStatus}
            removeOptionModalStatus={removeOptionModalStatus}
            submitNewOption={this.submitNewOption}
            submitDeleteOption={this.submitDeleteOption}
            modalOpen={this.modalOpen}
            modalClose={this.modalClose}
            handleChange={this.handleChange}
          />
        ),
      },
      {
        menuItem: { key: 'members', icon: 'users', content: 'Group Members' },
        render: () => (
          <GroupMemberOptions
            acceptedMembers={this.filterAccepted(groups.editAdminGroup.members)}
            approvePendingMember={this.approvePendingMember}
            currentGroup={groups.editAdminGroup._id}
            declinePendingMember={this.declinePendingMember}
            modalClose={this.modalClose}
            modalOpen={this.modalOpen}
            pendingMembers={this.filterPending(groups.editAdminGroup.members)}
            removeMemberId={removeMemberId}
            removeMemberModalStatus={removeMemberModalStatus}
            removeMemberName={removeMemberName}
            submitDeleteMember={this.submitDeleteMember}
            token={user.token}
          />
        ),
      },
    ];
    return (
      <div>
        {groups.pending ? (
          <Wait />
        ) : (
          <div>
            <Header as="h2" icon textAlign="center">
              <Icon name="cubes" size="mini" circular />
              <Header.Content>{groups.editAdminGroup.name}</Header.Content>
              <Header.Subheader>
                Group ID: {groups.editAdminGroup.groupId}
              </Header.Subheader>
            </Header>
            <Tab panes={panes} />
          </div>
        )}
      </div>
    );
  }
}

AdminGroupManage.propTypes = {
  addOption: PropTypes.func.isRequired,
  confirmPendingMember: PropTypes.func.isRequired,
  declinePendingMember: PropTypes.func.isRequired,
  fetchSingleAdminGroup: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  groups: PropTypes.shape({
    editAdminGroup: PropTypes.object,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  removeMember: PropTypes.func.isRequired,
  removeVoteOption: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  groups: state.groups,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addOption,
      confirmPendingMember,
      declinePendingMember,
      fetchSingleAdminGroup,
      removeMember,
      removeVoteOption,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(AdminGroupManage);
