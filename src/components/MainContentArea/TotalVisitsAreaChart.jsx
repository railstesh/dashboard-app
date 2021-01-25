import React from 'react';
import { ReferenceLine, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

export default class TotalVisitsAreaChart extends React.PureComponent {
  render () {
    const {
      data,
      xAxisTickCount,
      xAxisTickFormatter,
      xDataKey,
      customizedTooltip,
      yDataKey
    } = this.props;
    return (
      <div className=''>
        <AreaChart
          width={600}
          height={300}
          data={data}
        >
          <defs>
            <linearGradient id='total-visits-chart-fill' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#7459D9' stopOpacity={0.4}/>
              <stop offset='95%' stopColor='#7459D9' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            hide
            type='category'
            tickCount={xAxisTickCount}
            tickFormatter={xAxisTickFormatter}
            dataKey={xDataKey}
            minTickGap={5}
          />
          <YAxis
            hide
            dataKey={yDataKey}
            type='category'
          />
          <Tooltip content={customizedTooltip} />
          <ReferenceLine x='' />
          <Area type='monotone' fill={'url(#total-visits-chart-fill)'} dataKey='date' stroke='#7459D9' strokeWidth={4} /> 
        </AreaChart>
      </div>
    )
  }
}