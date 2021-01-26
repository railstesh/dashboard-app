import React from 'react';
import LeftSideBar from '../LeftSideBar';
import MainContent from './MainContent';
import Header from '../Header';
export default function MainContentArea () {
  return (
    <div className='d-flex py-0 px-0'>
      <div className='px-0'>
        <LeftSideBar />
      </div>
      <div className='px-0' style={{ width: '100vw' }}>
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
