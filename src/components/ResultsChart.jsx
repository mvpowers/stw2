import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const data = [
  {name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];

const ResultsChart = (props) => (
  <PieChart width={800} height={400}>
    <Pie data={data} cx={500} cy={200} innerRadius={140} outerRadius={180} fill="#82ca9d" labels />
    <Tooltip/>
  </PieChart>
);

export default ResultsChart
