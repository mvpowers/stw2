import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import ResultsGraph from '../components/ResultsGraph';
import { Comments, Question, Wait } from '../components';
import { fetchResult, toggleLike } from '../store/result/actions';

class ResultsPage extends Component {
  componentDidMount() {
    const { user, history, fetchResult } = this.props;
    if (!user.token) {
      history.push('/login');
    }
    fetchResult();
  }

  handleLike = (userId, commentId) => {
    const { toggleLike } = this.props;
    toggleLike(userId, commentId);
  };

  render() {
    const { result } = this.props;
    {
      if (result.data.pending) {
        return <Wait />;
      }
    }
    return (
      <Segment basic>
        <Question data={result.data} />
        <Segment>
          <ResultsGraph data={result.data} />
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
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  result: state.result,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchResult, toggleLike }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
