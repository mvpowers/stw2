import React from 'react';
import PropTypes from 'prop-types';

const GroupMemberOptions = ({ members }) => (
  <div>{JSON.stringify(members)}</div>
);

GroupMemberOptions.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default GroupMemberOptions;
