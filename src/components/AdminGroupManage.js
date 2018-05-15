import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AdminVoteOptions } from './';
import { fetchSingleAdminGroup, addOption } from '../store/group/actions';

class AdminGroupManage extends Component {
  constructor() {
    super();
    this.state = {
      currentOptionName: '',
      addOptionModalStatus: false,
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

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  modalOpen = () => {
    this.setState({ addOptionModalStatus: true });
  };

  modalClose = () => {
    this.setState({ addOptionModalStatus: false });
  };

  render() {
    const { groups, user } = this.props;
    const { currentOptionName, addOptionModalStatus } = this.state;
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
            token={user.token}
            error={groups.error}
            addOptionModalStatus={addOptionModalStatus}
            submitNewOption={this.submitNewOption}
            modalOpen={this.modalOpen}
            modalClose={this.modalClose}
            handleChange={this.handleChange}
          />
        ),
      },
      {
        menuItem: { key: 'users', icon: 'users', content: 'Users' },
        render: () => <div>pane two</div>,
      },
    ];
    return (
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
    );
  }
}

AdminGroupManage.propTypes = {
  fetchSingleAdminGroup: PropTypes.func.isRequired,
  addOption: PropTypes.func.isRequired,
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
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(AdminGroupManage);
