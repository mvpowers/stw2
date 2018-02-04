import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import VoteModal from './VoteModal';

const data = [
  { id: 1, name: 'Timmy', description: 'The one with the man-bun' },
  { id: 2, name: 'George', description: 'Eats frozen dinners for breakfast' },
  { id: 3, name: 'Larry', description: 'Dresses cats up for halloween' },
];

class VoteOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
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
    console.log(e.target);
  }
  modalClose() {
    console.log(this.state);
    this.setState({
      modalStatus: false,
    });
  }
  render() {
    return (
      <Card.Group itemsPerRow={1}>
        {data.map(option => (
          <Card key={option.id}>
            <Card.Content>
              <Card.Header>{option.name}</Card.Header>
              <Card.Meta>{option.description}</Card.Meta>
            </Card.Content>
            <Card.Content>
              <VoteModal
                modalStatus={this.state.modalStatus}
                modalOpen={this.modalOpen}
                modalClose={this.modalClose}
                voteId={option.id}
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
