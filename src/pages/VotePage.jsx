import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Dimmer, Segment } from 'semantic-ui-react';
import Question from '../components/Question';
import VoteOptions from '../components/VoteOptions';
import WaitDimmer from '../components/WaitDimmer';
import { fetchResult } from '../store/result/actions';

class VotePage extends Component {
  componentDidMount() {
    this.props.fetchResult();
  }
  render() {
    return (
      <Dimmer.Dimmable as={Segment} basic>
        <WaitDimmer />
        <Question data={this.props.result} />
        <VoteOptions />
      </Dimmer.Dimmable>
    );
  }
}

VotePage.propTypes = {
  result: PropTypes.object.isRequired,
  fetchResult: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    voteId: state.result.id,
    comment: state.result.comment,
    modalStatus: state.result.modalStatus,
    result: state.result,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchResult,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(VotePage);
