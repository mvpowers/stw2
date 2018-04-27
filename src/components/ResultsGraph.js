import React from 'react';
import PropTypes from 'prop-types';
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { NoData } from '../components';

const COLORS = [
  '#92a8d1',
  '#deeaee',
  '#034f84',
  '#b1cbbb',
  '#f7cac9',
  '#eea29a',
  '#f7786b',
  '#c94c4c',
];

const styles = {
  center: {
    display: 'grid',
  },
};

const ResultsGraph = ({ data }) => (
  <div>
    {data.votes.length > 0 ? (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={600} height={300}>
          <Pie
            dataKey="value"
            data={data.votes}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100}
            fill="#82ca9d"
          >
            {data.votes.map((entry, index) => (
              <Cell key={entry} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend iconType="circle" layout="vertical" />
        </PieChart>
      </ResponsiveContainer>
    ) : (
      <div style={styles.center}>
        <NoData />
      </div>
    )}
  </div>
);

ResultsGraph.propTypes = {
  data: PropTypes.shape({
    votes: PropTypes.array,
  }).isRequired,
};

export default ResultsGraph;
