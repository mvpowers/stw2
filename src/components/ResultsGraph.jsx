import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const data = [
  {name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];

const COLORS = ['#92a8d1', '#deeaee','#034f84', '#b1cbbb', '#f7cac9', '#eea29a', '#f7786b', '#c94c4c'];

const ResultsChart = (props) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart width={600} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={100}
        fill="#82ca9d"
      >
        {
          data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export default ResultsChart;
