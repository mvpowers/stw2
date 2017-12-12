import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';

const userData = { id: 10, name: 'Mikey' };


const Comments = ({ commentData, toggleLike }) => (
  <Card.Group itemsPerRow={1}>
    {commentData.map(comment =>
      (
        <Card
          fluid
          key={comment.id}
          id={comment.id}
          onClick={toggleLike}
          liked={comment.likedBy.includes(userData.id)}
        >
          <Card.Content extra>
            Vote for {comment.voteFor}
          </Card.Content>
          <Card.Content className="Comment-body">
            {comment.commentText}
          </Card.Content>
          <Card.Content extra>
            <Icon name="heart" />
            {comment.likedBy.length} Likes
          </Card.Content>
        </Card>
      ))}
  </Card.Group>
);

Comments.propTypes = {
  commentData: PropTypes.array.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default Comments;
