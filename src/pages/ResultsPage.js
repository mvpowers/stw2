import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import ResultsChart from '../components/ResultsGraph';
import Comments from '../components/Comments';
import Question from '../components/Question';
import { fetchResult, toggleLike } from '../store/result/actions';

class ResultsPage extends Component {
  componentDidMount() {
    const { fetchResult } = this.props;
    fetchResult();
  }

  handleLike = (userId, commentId) => {
    const { toggleLike } = this.props;
    toggleLike(userId, commentId);
  };

  render() {
    const { result } = this.props;
    return (
      <Segment basic>
        <Question data={result.data} />
        <Segment>
          <ResultsChart data={result.data} />
        </Segment>
        <Comments data={result.data} toggleLike={this.handleLike} />
      </Segment>
    );
  }
}

ResultsPage.propTypes = {
  result: PropTypes.shape({
    data: PropTypes.object.isRequired,
  }).isRequired,
  fetchResult: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  result: state.result,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchResult, toggleLike }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
