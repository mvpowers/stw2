import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import ResultsChart from '../components/ResultsGraph';
import Comments from '../components/Comments';
import Question from '../components/Question';
import { fetchResult } from '../store/result/actions';

class ResultsPage extends Component {
  componentDidMount() {
    this.props.fetchResult();
  }
  render() {
    console.log('result', this.props.result.data)
    return (
      <Segment basic>
        <Question data={this.props.result.data} />
        <Segment>
          <ResultsChart />
        </Segment>
        <Comments data={this.props.result.data} />
      </Segment>
    );
  }
}

ResultsPage.propTypes = {
  result: PropTypes.arrayOf(Object).isRequired,
  fetchResult: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
