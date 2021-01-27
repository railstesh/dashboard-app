import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import InfoIconText from '../InfoIconText';

export default class ActivePercentageBarGraph extends PureComponent {

  renderLegend = () => {
    const online = this.props.data.length > 0 && this.props.data[0]['online'];
    const offline = this.props.data.length > 0 && this.props.data[0]['offline'];

    return (
      <div className='d-flex justify-content-start w-100'>
        <div className='mb-4 w-25 mr-4'>
          <div className='d-flex justify-content-between'>
            <div style={{ backgroundColor: '#7459D9', borderRadius: '44px', height: '4px', width: '30px' }} />
            <p className='mb-1 fs-base-sm gray-50 text-capitalize'>online</p>
          </div>
          <p className='mb-0 text-right font-weight-bold fs-base-sm light-black'>{online} users</p>
        </div>
        <div className='mb-4 w-25 ml-4'>
          <div className='d-flex justify-content-between'>
            <div style={{ backgroundColor: 'rgba(116, 89, 217, 0.2)', borderRadius: '44px', height: '4px', width: '30px' }} />
            <p className='mb-1 fs-base-sm gray-50 text-capitalize'>offline</p>
          </div>
          <p className='mb-0 text-right font-weight-bold fs-base-sm light-black'>{offline} users</p>
        </div>
      </div>
    );
  }

  render() {
    const total = this.props.data && (this.props.data[0]['online'] + this.props.data[0]['offline']);

    return (
      <div>
        <div className='my-4'>
          <InfoIconText text='Active Percentage' />
        </div>
        <div className='mb-n5'>
          <p className='mb-0 light-black font-weight-bold fs-3xl'>{total} <span className='font-weight-normal gray-50 fs-base-sm'>Total</span></p>
        </div>
        <BarChart
          layout='vertical'
          maxBarSize={20}
          width={this.props.isTabletOrMobile ? 320 : 500}
          height={250}
          data={this.props.data}
        >
          <XAxis hide type='number'/>
          <YAxis hide type='category' />
          <Legend layout='horizontal' align='left' verticalAlign='middle' content={this.renderLegend} />
          <Bar dataKey="online" stackId='activeUser' fill="#7459D9" />
          <Bar dataKey="offline" stackId='activeUser' fill="rgba(116, 89, 217, 0.2)" />
        </BarChart>
      </div>
    );
  }
}
