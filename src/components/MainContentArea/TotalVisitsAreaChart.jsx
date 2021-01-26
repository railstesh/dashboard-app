import React from 'react';
import moment from 'moment';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function CustomizedAxisTick (props) {
  const { x, y, payload, type } = props;

  const setPostFixToNumber = y => {

    const stringValue = y.toString();
    const counts = stringValue.length;
    let newFormattedNumber = '';
    if (counts === 4) {
      newFormattedNumber = stringValue.slice(0, 1) + 'K';
    } else if (counts === 5) {
      newFormattedNumber = stringValue.slice(0, 2) + 'K';
    } else if (counts === 6) {
      newFormattedNumber = stringValue.slice(0, 1) + 'M';
    } else if (counts === 7) {
      newFormattedNumber = stringValue.slice(0, 2) + 'M';
    }
    return newFormattedNumber;
  };

  return (
    <g transform={`translate(${type === 'x' ? (x + 40) : x},${y})`}>
      <text
        x={0}
        y={0}
        dy={type === 'y' ? 0 : 16}
        textAnchor="end"
        fill="#666"
        className="customized-axis-tick-text"
      >
        {type === 'y' ? setPostFixToNumber(payload.value) : moment(payload.value).format('ll').slice(0, 6)}
      </text>
    </g>
  );
}

export default class TotalVisitsAreaChart extends React.PureComponent {
  render () {
    const {
      data,
      xAxisTickCount,
      yAxisTickCount,
      xAxisTickFormatter,
      xDataKey,
      yDataKey,
      customizedTooltip,
    } = this.props;
    return (
      <div className=''>
        <AreaChart
          width={1250}
          height={360}
          data={data}
        >
          <defs>
            <linearGradient id='total-visits-chart-fill' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#7459D9' stopOpacity={0.4}/>
              <stop offset='95%' stopColor='#7459D9' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            axisLine={false}
            tickLine={false}
            type='number'
            tickCount={xAxisTickCount}
            tickFormatter={xAxisTickFormatter}
            dataKey={xDataKey}
            tick={<CustomizedAxisTick type='x' />}
            domain={[ 'dataMin' , 'dataMax' ]}
          />
          <YAxis
            domain={['auto', 'auto']}
            axisLine={false}
            tickLine={false}
            type='number'
            dataKey={yDataKey}
            tickCount={yAxisTickCount}
            interval='preserveStartEnd'
            tick={<CustomizedAxisTick type='y' />}
          />
          <Tooltip content={customizedTooltip} />
          <CartesianGrid 
            vertical={false} 
            strokeDasharray='0'
            strokeWidth={2}
            stroke='#ECE9F1'
          />
          <Area activeDot={{ strokeWidth: 4, r: 8 }} type='basisOpen' fill={'url(#total-visits-chart-fill)'} dataKey='visit' stroke='#7459D9' strokeWidth={4} /> 
        </AreaChart>        
      </div>
    )
  }
}