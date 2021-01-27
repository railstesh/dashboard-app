import React from 'react';
import { Menu, Command, MessageSquare, PieChart, Clock, Globe, Loader } from 'react-feather';
import bitCoin from '../../assets/icons/Bitcoin Icon.png';
import smile from '../../assets/icons/smile.png';
import airBnb from '../../assets/icons/Airbnb Icon.png';

export default function LeftSideBar () {
  return (
    <div className='border-right border-gray-lighter bg-white py-4 px-3 d-flex flex-column justify-content-between h-100'>
      <div className='text-center'>
        <div className='my-2 mb-5'>
          <Menu stroke='#D0D1D2' className='' size={20} />
        </div>
        <div className='my-3'>
          <img src={bitCoin} alt='' className='' />
        </div>
        <div className='my3'>
          <img src={smile} alt='' className='' />
        </div>
        <div className='my-3'>
          <img src={airBnb} alt='' className='' />
        </div>
        <div className='mt-5 my-3 left-side-panel-icons-container'>
          <Command size={14} className='' />
        </div>
        <div className='my-3 left-side-panel-icons-container'>
          <PieChart size={14} className='' />
        </div>
        <div className='my-3 left-side-panel-icons-container'>
          <Clock size={14} className='' />
        </div>
        <div className='my-3 left-side-panel-icons-container'>
          <Globe size={14} className='' />
        </div>
        <div className='my-3 left-side-panel-icons-container'>
          <Loader size={14} className='' />
        </div>
      </div>
      <div className='left-side-panel-icons-container'>
        <MessageSquare size={14} className='' />
      </div>
    </div>
  );
}
