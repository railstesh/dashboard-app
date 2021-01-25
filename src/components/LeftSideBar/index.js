import React from 'react';
import { Menu, Command, MessageSquare, PieChart, Clock, Globe, Loader } from 'react-feather';
import bitCoin from '../../assets/icons/Bitcoin Icon.png';
import smile from '../../assets/icons/smile.png';
import airBnb from '../../assets/icons/Airbnb Icon.png';

export default function LeftSideBar () {
  return (
    <div className='bg-white py-4 d-flex flex-col justify-content-between h-100'>
      <div className=''>
        <div className='my-2 mb-5'>
          <Menu fill='#D0D1D2' className='' size={20} />
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
        <div className=''>
          <Command size={14} className='' />
        </div>
        <div className=''>
          <PieChart size={14} className='' />
        </div>
        <div className=''>
          <Clock size={14} className='' />
        </div>
        <div className=''>
          <Globe size={14} className='' />
        </div>
        <div className=''>
          <Loader size={14} className='' />
        </div>
      </div>
      <div className=''>
        <img src={} alt='' className />
      </div>
    </div>
  );
}
