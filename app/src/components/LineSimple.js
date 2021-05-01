import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,   
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


export default function LineSimple(props) {
  return (
      <ResponsiveContainer width="90%" height="90%">
        <LineChart width={500} height={300} data={props.data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="date"  domain={['auto', 'auto']} />
          <YAxis type="number" domain={['auto', 'auto']}/>
          <Tooltip animationDuration='500' />
          <Legend />
          <Line type="monotone" dataKey="low" stroke="#8884d8" 
            activeDot={{ r: 6 }} legendType="circle" dot={false}/>
          <Line type="monotone" dataKey="high" stroke="cyan" 
            activeDot={{ r: 6 }} legendType="circle" dot={false}/>
          <Line type="monotone" dataKey="close" stroke="pink" 
            activeDot={{ r: 6 }} legendType="circle" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
  );
}
