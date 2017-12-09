import React from 'react';
import { Card } from 'semantic-ui-react';
import VoteModal from './VoteModal';

const data = [
  { name: 'Timmy', description: 'The one with the man-bun' },
  { name: 'George', description: 'Eats frozen dinners for breakfast' },
  { name: 'Larry', description: 'Dresses cats up for halloween' },
];

const VoteOptions = () => (
  <Card.Group itemsPerRow={1}>
    {data.map(option =>
      (
        <Card>
          <Card.Content>
            <Card.Header>
              {option.name}
            </Card.Header>
            <Card.Meta>
              {option.description}
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <VoteModal />
          </Card.Content>
        </Card>
      ))}
  </Card.Group>
);

export default VoteOptions;