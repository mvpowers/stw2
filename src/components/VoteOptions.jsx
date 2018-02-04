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
  modalOpen() {
    this.setState({
      modalStatus: true,
    });
  }
  modalClose() {
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
              />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    );
  }
}

export default VoteOptions;
