import React from 'react';
import LeftSideBar from '../LeftSideBar';
import MainContent from './MainContent';
import Header from '../Header';
import { dashboardService } from '../../services';
import { Loader } from 'react-feather';

export default class MainContentArea extends React.PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      dashboardData: null
    };
  }

  async componentDidMount () {
    const response = await dashboardService.getDashboardData();
    if (response) {
      this.setState({
        ...this.state,
        dashboardData: JSON.parse(response)
      });
    }
  }

  render () {
    return (
      <div className='d-flex py-0 px-0'>
        <div className='px-0' style={{ minHeight: '100vh' }}>
          <LeftSideBar />
        </div>
        <div className='px-0 w-100 h-100'>
          <Header />
          {!this.state?.dashboardData && (
            <div className='w-100 h-100 my-auto mx-auto d-flex'> 
              <Loader className='text-center mx-auto my-auto w-100'/>
            </div>
          )}
          {this.state?.dashboardData && <MainContent isTabletOrMobile={this.props.isTabletOrMobile} data={this.state?.dashboardData} />}
        </div> 
      </div>
    );
  }
}
