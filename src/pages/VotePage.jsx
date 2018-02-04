import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Dimmer, Segment } from 'semantic-ui-react';
import VoteOptions from '../components/VoteOptions';
import Question from '../components/Question';
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
        <Question data={this.props.result.data} />
        <VoteOptions />
      </Dimmer.Dimmable>
    );
  }
}

VotePage.propTypes = {
  fetchResult: PropTypes.func.isRequired,
  result: PropTypes.shape({
    data: PropTypes.shape({
      votes: PropTypes.array,
      comments: PropTypes.array,
      votesVisible: PropTypes.bool,
      active: PropTypes.bool,
      _id: PropTypes.string,
      question: PropTypes.string.isRequired,
      __v: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
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
