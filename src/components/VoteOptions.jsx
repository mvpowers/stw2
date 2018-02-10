import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import VoteModal from './VoteModal';

class VoteOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
      currentVoteName: '',
    };
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
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
  render() {
    const { data } = this.props;
    return (
      <Card.Group itemsPerRow={1}>
        {data.map(option => (
          <Card key={option._id}>
            <Card.Content>
              <Card.Header>{option.name}</Card.Header>
              <Card.Meta>{option.description}</Card.Meta>
            </Card.Content>
            <Card.Content>
              <VoteModal
                modalStatus={this.state.modalStatus}
                modalOpen={this.modalOpen}
                modalClose={this.modalClose}
                voteId={option._id}
                voteName={option.name}
                displayName={this.state.currentVoteName}
              />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    );
  }
}

export default VoteOptions;
