import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell, Label,
} from 'recharts';

export default class PerpetualPieChart extends PureComponent {

  getColors = index => `rgba(116, 89, 217, ${1 - (index / (this.props.data.length))})`;

  renderLegend = () => {
    return (
      <div className=''>
        {this.props.data.map((i, index) => (
          <div key={index} className=''>
            <div className='d-flex justify-content-between'>
              <div style={{ backgroundColor: this.getColors(index), borderRadius: '44px', height: '4px', width: '30px' }} />
              <div className=''>{i.keys}</div>
            </div>
            <p className='w-100 text-right'>{i.value} users</p>
          </div>
        ))}
      </div>
    );
  };
  render() {
    return (
      <div className='d-flex'>
        <PieChart width={250} height={350}>
          <Label value={'dddd'} position='center' />
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
        <div className=''>
          {this.renderLegend()}
        </div>
      </div>
    );
  }
}
