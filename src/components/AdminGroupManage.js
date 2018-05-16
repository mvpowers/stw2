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
    if (!user.token) {
      history.push('/login');
    }
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
            currentGroup={groups.editAdminGroup._id}
            members={groups.editAdminGroup.members}
            removeMemberModalStatus={removeMemberModalStatus}
            token={user.token}
            modalOpen={this.modalOpen}
            modalClose={this.modalClose}
            submitDeleteMember={this.submitDeleteMember}
            removeMemberName={removeMemberName}
            removeMemberId={removeMemberId}
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
              {console.log('rerender')}
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
  fetchSingleAdminGroup: PropTypes.func.isRequired,
  addOption: PropTypes.func.isRequired,
  removeVoteOption: PropTypes.func.isRequired,
  removeMember: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  groups: PropTypes.shape({
    editAdminGroup: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  groups: state.groups,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSingleAdminGroup,
      addOption,
      removeVoteOption,
      removeMember,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(AdminGroupManage);
