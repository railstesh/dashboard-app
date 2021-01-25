import React from 'react';
import RighSideBar from '../RightSideBar';
import TotalVisitsAreaChart from './TotalVisitsAreaChart';
import PerpetualPieChart from './PerpetualPieChart';
import ActivePercentageBarGraph from './ActivePercentageBarGraph';
import { data } from './utility';

export default class MainContent extends React.Component {

  customizedTooltip = (props) => {
    return (
      <div className='text-left chart-tooltip-container'>
        <p className='font-xs light-secondary-gray my-1'>This month</p>
        <p className='light-black font-xl my-1'>{"payload[0]?.payload['visit']"}</p>
        <p className='font-sm light-secondary-gray my-1'>May</p>
      </div>
    );
  }

  getFormattedData = (key) => {
    const Key = key.map(d => ({ d: d['Date'], date: new Date(d['Date']).toLocaleDateString(), visit: d['Visits'] }));

    const compare = (a, b) => {
      return (a.date - b.date);
    }

    Key.sort(compare);
    return Key;
  };

  setPostFixToNumber = y => {
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

  convertToArray = (objects) => {
    return Object.keys(objects).map(i => ({ 'keys': i.toString(), 'value': objects[i] }));
  }

  getPercentageData = (activeUsersData) => {
    let percentagePayload = activeUsersData.reduce((acc, user) => {
      if (user['Status'] === 1) {
        acc['online'] = acc['online'] + 1 || 1;
      } else {
        acc['offline'] = !!acc['offline'] + 1 || 1;
      }
      return acc;
    }, {});
    

    return [{ ...percentagePayload }];
  }

  render () {
    const formattedData = this.getFormattedData(data['total_visits']);
    console.log(formattedData);
    const pieChartData = this.convertToArray(data['sources']);
    const activePercentageData = this.getPercentageData(data['active_users']);

    return (
      <div className='main-content-container'>
        <div className='bg-white'>
          <TotalVisitsAreaChart
            data={formattedData}
            xAxisTickCount={7}
            yAxisTickCount={4}
            xAxisTickFormatter={x => new Date(x).getDay()}
            yAxisTickFormatter={this.setPostFixToNumber}
            xDataKey='d'
            yDataKey='visit'
            customizedTooltip={this.customizedTooltip}
          />
        </div>
        <div className='bg-white d-flex justify-content-between w-100'>
          <PerpetualPieChart data={pieChartData} />
          <div className='d-flex'>
            <ActivePercentageBarGraph data={activePercentageData} />
          </div>
        </div>
        <RighSideBar />
      </div>
    );
  }
}
