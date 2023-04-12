import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const data = [
  { name: 'Assignment-1', mark: 53 },
  { name: 'Assignment-2', mark: 58 },
  { name: 'Assignment-3', mark: 58 },
  { name: 'Assignment-4', mark: 55 },
  { name: 'Assignment-5', mark: 48 },
  { name: 'Assignment-6', mark: 53 },
  { name: 'Assignment-7', mark: 60 },
  { name: 'Assignment-8', mark: 60 },
];

const Statistics = () => {
 
  return (
    <div className='my-container'>
      <h1 className='text-center text-2xl font-semibold my-3'>Assignment Mark Barchart</h1>
      <AreaChart width={1200} height={500} data={data}>
      <Area type="monotone" dataKey="mark" stroke="#999999" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </AreaChart>
    </div>
  );
};

export default Statistics;