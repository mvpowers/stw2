import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';

const userData = { id: 10, name: 'Mikey' };


const Comments = ({ commentData, toggleLike }) => (
  <Card.Group itemsPerRow={1}>
    {commentData.map(commentObj =>
      (
        <Card fluid key={commentObj.id} id={commentObj.id} onClick={toggleLike}>
          <Card.Content extra>
            Vote for {commentObj.voteFor}
          </Card.Content>
          <Card.Content className="Comment-body">
            {commentObj.commentText}
          </Card.Content>
          <Card.Content extra>
            <Icon name="heart"  />
            {commentObj.likedBy.length} Likes
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
