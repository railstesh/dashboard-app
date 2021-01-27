import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import InfoIconText from '../InfoIconText';

export default class PerpetualPieChart extends PureComponent {

  getColors = index => `rgba(116, 89, 217, ${1 - (index / (this.props.data.length))})`;

  renderTotalUsers = () => {
    const total = this.props.data.reduce((acc, curr) => (acc + curr.value), 0);
    return (
      <div className='text-center'>
        <p className='fs-lg font-weight-bolder light-black'>{total}</p>
        <p className='fs-base gray-50'>Label</p>
      </div>
    );
  }

  renderPieChartInfo = () => {
    return (
      <>
        {this.props.data.map((i, index) => (
          <div key={index} className='mb-4'>
            <div className='d-flex justify-content-between'>
              <div className='mr-2' style={{ backgroundColor: this.getColors(index), borderRadius: '44px', height: '4px', width: '30px' }} />
              <p className='mb-1 fs-base-sm gray-50'>{i.keys}</p>
            </div>
            <p className='mb-0 text-right font-weight-bold fs-base-sm light-black'>{i.value} users</p>
          </div>
        ))}
      </>
    );
  };

  render() {
    return (
      <div className='d-sm-flex justify-content-between'>
        <div className=''>
          <div className='ml-4 mt-4 text-left'>
            <InfoIconText text='Perpetual' />
          </div>
          <PieChart width={250} height={390}>
            <Legend wrapperStyle={{ top: '45%', right: 0, left: 0 }} content={this.renderTotalUsers} />
            <Pie
              data={this.props.data}
              cx={120}
              cy={200}
              innerRadius={70}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={7}
              dataKey="value"
            >
              {this.props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={this.getColors(index)} />)}
            </Pie>
          </PieChart>
        </div>
        <div className='my-auto'>
          {this.renderPieChartInfo()}
        </div>
      </div>
    );
  }
}
