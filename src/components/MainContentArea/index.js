import React from 'react';
import LeftSideBar from '../LeftSideBar';
import RightSideBar from '../RightSideBar';
import MainContent from './MainContent';

export default function MainContentArea () {
  return (
    <div className=''>
      <LeftSideBar />
      <MainContent />
      <RightSideBar />
    </div>
  );
}
