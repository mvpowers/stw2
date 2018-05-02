import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';

const userData = { id: 10, name: 'Mikey' };

const Comments = ({ comments, toggleLike }) => (
  <Card.Group itemsPerRow={1}>
    {comments.map(comment => (
      <Card
        fluid
        key={comment._id}
        onClick={() => {
          toggleLike(userData.id, comment._id);
        }}
        liked={comment.likedBy}
        user={userData.id}
        style={{ color: '#333' }}
      >
        <Card.Content extra>Vote for {comment.voteFor}</Card.Content>
        <Card.Content className="comment-body">{comment.text}</Card.Content>
        <Card.Content extra>
          <Icon
            name="heart"
            color={comment.likedBy.includes(userData.id) ? 'red' : 'grey'}
          />
          {comment.likedBy.length} Likes
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      likedBy: PropTypes.array,
      voteFor: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default Comments;
