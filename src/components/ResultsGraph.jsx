import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Timmy', value: 3 },
  { name: 'George', value: 7 },
  { name: 'Larry', value: 5 }];

const COLORS = ['#92a8d1', '#deeaee', '#034f84', '#b1cbbb', '#f7cac9', '#eea29a', '#f7786b', '#c94c4c'];

const ResultsGraph = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart width={600} height={300}>
      <Pie
        dataKey="value"
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={100}
        fill="#82ca9d"
      >
        {
          data.map((entry, index) => <Cell key={entry} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
      <Tooltip />
      <Legend iconType="circle" layout="vertical" />
    </PieChart>
  </ResponsiveContainer>
);

export default ResultsGraph;
