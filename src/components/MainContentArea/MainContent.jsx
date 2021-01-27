import React from 'react';
import { ChevronRight, Plus } from 'react-feather';
import RighSideBar from '../RightSideBar';
import TotalVisitsAreaChart from './TotalVisitsAreaChart';
import PerpetualPieChart from './PerpetualPieChart';
import ActivePercentageBarGraph from './ActivePercentageBarGraph';
import moment from 'moment';
import darkMoon from '../../assets/icons/dark_moon.png';

export default class MainContent extends React.Component {

  customizedTooltip = ({ active, payload, label }) => {
    if (!!payload && payload?.length > 0) {
      return (
        <div className='text-left chart-tooltip-container'>
          <p className='font-xs light-secondary-gray my-1'>This month</p>
          <p className='light-black font-xl my-1'>{payload[0]?.payload['visit']}</p>
          <p className='font-sm light-secondary-gray my-1'>{moment(payload[0]?.payload['d']).format("MMMM")}</p>
        </div>
      );
    }
    return (<></>);
  }

  getFormattedData = (key) => {
    const Key = key.map(d => ({ d: d['Date'], date: moment(d['Date']).format('ll').slice(0, 6), visit: d['Visits'] }));

    const compare = (a, b) => {
      return (a.date - b.date);
    }

    Key.sort(compare);
    return Key;
  };

  convertToArray = (objects) => {
    return Object.keys(objects).map(i => ({ 'keys': i.toString(), 'value': objects[i] }));
  }

  getPercentageData = (activeUsersData) => {
    let percentagePayload = activeUsersData.reduce((acc, user) => {
      if (user['Status'] === 1) {
        acc['online'] = acc['online'] + 1 || 1;
      } else {
        acc['offline'] = acc['offline'] + 1 || 1;
      }
      return acc;
    }, {});
    return [{ ...percentagePayload }];
  }

  render () {
    const { data } = this.props;
    const formattedData = this.getFormattedData(data['total_visits']);
    const pieChartData = this.convertToArray(data['sources']);
    const activePercentageData = this.getPercentageData(data['active_users']);

    return (
      <div className='row m-0 h-100'>
        <div className='bg-white p-4 container-fluid col-md-9 col-12'>
          <div className='ml-sm-4 my-4 d-flex flex-column justify-content-start align-content-start'>
            <div className='my-2 align-items-center font-weight-bold text-uppercase fs-sm font-sf-pro d-flex'>
              <p className='light-violet mx-1 mb-0'>Dashboard</p>
              <ChevronRight className='mx-2' strokeWidth={4} stroke='#D0D1D2' size={15} />
              <p className='gray-50 mx-1 mb-0'>bitforex.com</p>
            </div>
            <div className='my-2 d-flex'>
              <img src={darkMoon} className='mx-1' alt='dark-moon' />
              <p className='mx-3 light-black font-sf-pro fs-3lg mb-0'>b.copper</p>
              <div style={{ width: '45px', height: '45px' }} className='d-flex justify-content-center align-items-center light-violet mx-1 rounded-circle background-light-gray'>
                <Plus strokeWidth={4} className='fill-light-violet stroke-light-violet' size={20} />
              </div>
            </div>
          </div>
          <div className=''>
            <TotalVisitsAreaChart
              data={formattedData}
              xAxisTickCount={7}
              yAxisTickCount={4}
              xAxisTickFormatter={x => x}
              xDataKey='d'
              yDataKey='visit'
              customizedTooltip={this.customizedTooltip}
              isTabletOrMobile={this.props.isTabletOrMobile}
            />
          </div>
          <div className='d-xl-flex justify-content-between w-100'>
            <PerpetualPieChart data={pieChartData} />
            <div className='d-flex'>
              <ActivePercentageBarGraph isTabletOrMobile={this.props.isTabletOrMobile} data={activePercentageData} />
            </div>
          </div>
        </div>
        <RighSideBar />
      </div>
    );
  }
}
