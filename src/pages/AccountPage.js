import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Segment, Tab } from 'semantic-ui-react';
import { AccountDetailsForm, GroupManage } from '../components';
import { updateUser, clearUserErrors } from '../store/user/actions';
import { createGroup, leaveGroup, joinGroup } from '../store/group/actions';

class AccountPage extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      prevState.accountName !== nextProps.user.name ||
      prevState.accountPhone !== nextProps.user.phone ||
      prevState.accountEmail !== nextProps.user.email
    ) {
      return {
        accountName: nextProps.user.name,
        accountPhone: nextProps.user.phone,
        accountEmail: nextProps.user.email,
        nameAltered: false,
        phoneAltered: false,
        emailAltered: false,
        currentLeaveName: '',
        currentLeaveId: '',
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      accountName: props.user.name,
      accountPhone: props.user.phone,
      accountEmail: props.user.email,
      nameAltered: false,
      phoneAltered: false,
      emailAltered: false,
      leaveModalStatus: false,
      currentLeaveName: '',
      currentLeaveId: '',
      createModalStatus: false,
      currentCreateName: '',
      joinModalStatus: false,
      currentJoinId: '',
    };
  }

  componentDidMount() {
    const { user, history } = this.props;
    if (!user.token) {
      history.push('/login');
    }
    this.props.clearUserErrors();
  }

  handleChange = e => {
    const { user } = this.props;
    const inputField = e.target.id.replace('account', '').toLowerCase();
    const alteredState = `${inputField}Altered`;

    this.setState({
      [e.target.id]: e.target.value,
    });

    if (user[inputField] !== e.target.value) {
      this.setState({
        [alteredState]: true,
      });
    } else {
      this.setState({ [alteredState]: false });
    }
  };

  modalOpen = e => {
    switch (e.target.getAttribute('action')) {
      case 'leave': {
        return this.setState({
          leaveModalStatus: true,
          currentLeaveName: e.target.name,
          currentLeaveId: e.target.id,
        });
      }

      case 'create': {
        return this.setState({
          createModalStatus: true,
        });
      }

      case 'join': {
        return this.setState({
          joinModalStatus: true,
        });
      }

      default:
        return null;
    }
  };

  modalClose = () => {
    this.setState({
      leaveModalStatus: false,
      createModalStatus: false,
      joinModalStatus: false,
    });
  };

  submitNewGroup = (token, name) => {
    this.props.createGroup(token, name);
    this.setState({ currentCreateName: '', createModalStatus: false });
  };

  submitLeaveGroup = (token, name) => {
    this.props.leaveGroup(token, name);
    this.setState({ leaveModalStatus: false });
  };

  submitJoinGroup = (token, groupId) => {
    this.props.joinGroup(token, groupId);
    this.setState({ joinModalStatus: false });
  };

  render() {
    const { user, groups, updateUser } = this.props;
    const {
      accountName,
      accountPhone,
      accountEmail,
      nameAltered,
      phoneAltered,
      emailAltered,
      leaveModalStatus,
      currentLeaveName,
      currentLeaveId,
      createModalStatus,
      currentCreateName,
      joinModalStatus,
      currentJoinId,
    } = this.state;
    const panes = [
      {
        menuItem: { key: 'user', icon: 'user', content: 'User' },
        render: () => (
          <Tab.Pane>
            <AccountDetailsForm
              error={user.userUpdateError}
              token={user.token}
              accountName={accountName}
              accountPhone={accountPhone}
              accountEmail={accountEmail}
              handleChange={this.handleChange}
              nameAltered={nameAltered}
              phoneAltered={phoneAltered}
              emailAltered={emailAltered}
              updateUser={updateUser}
              updateMessage={user.userUpdateMessage}
            />
          </Tab.Pane>
        ),
      },
      {
        menuItem: { key: 'group', icon: 'users', content: 'Groups' },
        render: () => (
          <GroupManage
            groups={groups.data}
            modalOpen={this.modalOpen}
            modalClose={this.modalClose}
            handleChange={this.handleChange}
            submitNewGroup={this.submitNewGroup}
            submitLeaveGroup={this.submitLeaveGroup}
            submitJoinGroup={this.submitJoinGroup}
            leaveModalStatus={leaveModalStatus}
            currentLeaveName={currentLeaveName}
            currentLeaveId={currentLeaveId}
            createModalStatus={createModalStatus}
            currentCreateName={currentCreateName}
            joinModalStatus={joinModalStatus}
            currentJoinId={currentJoinId}
            token={user.token}
            error={groups.error}
            successMessage={groups.successMessage}
          />
        ),
      },
    ];

    return (
      <Segment>
        <Tab panes={panes} />
      </Segment>
    );
  }
}

AccountPage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    token: PropTypes.string,
  }).isRequired,
  groups: PropTypes.shape({
    error: PropTypes.arrayOf(PropTypes.string),
    successMessage: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
  clearUserErrors: PropTypes.func.isRequired,
  createGroup: PropTypes.func.isRequired,
  leaveGroup: PropTypes.func.isRequired,
  joinGroup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  groups: state.groups,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateUser,
      clearUserErrors,
      createGroup,
      leaveGroup,
      joinGroup,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
