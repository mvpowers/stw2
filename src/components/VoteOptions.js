import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { VoteModal } from '../components';

class VoteOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
      currentVoteName: '',
      currentVoteId: '',
    };
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.submitVote = this.submitVote.bind(this);
  }
  modalOpen(e) {
    this.setState({
      modalStatus: true,
      currentVoteId: e.target.id,
      currentVoteName: e.target.name,
    });
  }
  modalClose() {
    this.setState({
      modalStatus: false,
    });
  }
  submitVote() {
    console.log({
      voteName: this.state.currentVoteName,
      voteId: this.state.currentVoteId,
    });
    this.setState({
      modalStatus: false,
    });
  }
  render() {
    const { data } = this.props;
    return (
      <Card.Group itemsPerRow={1}>
        {data.map(option => (
          <Card key={option._id}>
            <Card.Content>
              <Card.Header>{option.name}</Card.Header>
            </Card.Content>
            <Card.Content>
              <VoteModal
                modalStatus={this.state.modalStatus}
                modalOpen={this.modalOpen}
                modalClose={this.modalClose}
                voteId={option._id}
                voteName={option.name}
                displayName={this.state.currentVoteName}
                submitVote={this.submitVote}
              />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    );
  }
}

VoteOptions.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default VoteOptions;
