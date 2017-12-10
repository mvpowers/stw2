import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import VoteModal from './VoteModal';

const data = [
  { voteFor: 'Timmy', comment: 'He has issues', likes: 2 },
  { voteFor: 'George', comment: 'I once seen him eat a whole block of cheese', likes: 4 },
  { voteFor: 'Larry', comment: 'He dresses cats up for halloween', likes: 7 },
];

const VoteOptions = () => (
  <Card.Group itemsPerRow={1}>
    {data.map(commentObj =>
      (
        <Card fluid>
          <Card.Content>
          <Icon name='heart' size='huge' fitted color='red' disabled style={{margin: '10px', float: 'left', position: 'static'}}/>
            <Card.Header style={{position: 'relative', float:'right'}}>
              Vote for {commentObj.voteFor}
            </Card.Header>
            <Card.Description style={{float: 'right', position: 'static'}}>
              {commentObj.comment}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Icon name='heart' />
              {commentObj.likes} Likes
          </Card.Content>
        </Card>
      ))}
  </Card.Group>
);

export default VoteOptions;
