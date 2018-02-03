import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Dimmer, Segment } from 'semantic-ui-react';
import Question from '../components/Question';
import VoteOptions from '../components/VoteOptions';
import WaitDimmer from '../components/WaitDimmer';
import { updateComment, updateId, openModal, closeModal, fetchResult } from '../store/vote/actions';

class VotePage extends Component {
  componentDidMount() {
    this.props.fetchResult();
  }
  render() {
    return (
      <Dimmer.Dimmable as={Segment} basic>
        <WaitDimmer />
        <Question data={this.props.question} />
        <VoteOptions
          modalStatus={this.props.modalStatus}
          modalOpen={this.props.openModal}
          modalClose={this.props.closeModal}
          handleCommentChange={this.props.updateComment}
          handleVoteIdChange={this.props.updateId}
        />
      </Dimmer.Dimmable>
    );
  }
}

VotePage.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  updateId: PropTypes.func.isRequired,
  fetchResult: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    voteId: state.vote.id,
    comment: state.vote.comment,
    modalStatus: state.vote.modalStatus,
    question: state.vote.vote,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateComment,
    updateId,
    openModal,
    closeModal,
    fetchResult,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VotePage);
