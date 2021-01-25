import React from 'react';
import LeftSideBar from '../LeftSideBar';
import MainContent from './MainContent';
import Header from '../Header';
export default function MainContentArea () {
  return (
    <div className='row'>
      <div className='col-auto'>
        <LeftSideBar />
      </div>
      <div className='col-11'>
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
