import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

export default class ActivePercentageBarGraph extends PureComponent {
  render() {
    return (
      <BarChart
        layout='vertical'
        maxBarSize={20}
        width={500}
        height={400}
        data={this.props.data}
      >
        <XAxis hide type='number'/>
        <YAxis hide type='category' />
        <Bar dataKey="online" stackId='activeUser' fill="#413ea0" />
        <Bar dataKey="offline" stackId='activeUser' fill="rgba(116, 89, 217, 0.2)" />
      </BarChart>
    );
  }
}
