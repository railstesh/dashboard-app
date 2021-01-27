import React from 'react';
import moment from 'moment';
import { Calendar, MoreHorizontal } from 'react-feather';
import { Legend, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import InfoIconText from '../InfoIconText';

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
  renderLegend = () => {
    return (
      <div className='w-100 d-sm-flex justify-content-between align-items-center my-4'>
        <InfoIconText className='ml-sm-4' text='Total Visits' />
        <div className='d-sm-flex justify-content-between align-items-center'>
          <div className='mr-sm-2 my-1 my-sm-0' style={{ backgroundColor: '#ECE9F1', borderRadius: '44px', height: '4px', width: '55px' }} />
          <p className='mr-sm-2 my-1 my-sm-0 font-sf-pro fs-sm font-weight-normal gray-50 mb-0'>Provisions Month</p>
          <div className='mr-sm-2 my-1 my-sm-0 fs-base-sm light-black border border-gray-lighter rounded-sm px-2 py-1'>
            March 2020 <span>
              <Calendar size={14} stroke='rgba(66, 47, 138, 0.87)' />
            </span>
          </div>
          <div className='my-1 my-sm-0 border border-gray-lighter rounded-sm' style={{ padding: '2px' }}>
            <MoreHorizontal stroke='rgba(66, 47, 138, 0.87)' />
          </div>
        </div>
      </div>
    );
  }

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
        <ResponsiveContainer width='100%' height={360}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id='total-visits-chart-fill' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#7459D9' stopOpacity={0.4}/>
                <stop offset='95%' stopColor='#7459D9' stopOpacity={0} />
              </linearGradient>
            </defs>
            <Legend verticalAlign="top" align='left' content={this.renderLegend} />
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
        </ResponsiveContainer>      
      </div>
    )
  }
}