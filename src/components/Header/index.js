import React from 'react';
import profileImage from '../../assets/icons/Rectangle 6.png';
import { ChevronDown, Moon, Search } from 'react-feather';

export default function Header () {
  return (
    <div className='bg-white d-flex justify-content-between w-100 border-gray-light border-bottom'>
      <div className='px-4 py-4 d-flex justify-content-between fs-base font-weight-bold align-items-center'>
        <div className='mx-4 light-black'>Dashboard</div>
        <div className='mx-4 gray-50'>Advanced Quarry</div>
        <div className='mx-4 gray-50'>Events</div>
        <Search className='mx-4 gray-50 search-icons' />
      </div>
      <div className='px-4 py-4 d-flex justify-content-between light-black fs-md font-sf-pro font-weight-bold align-items-center'>
        <div className='mx-3'>
          Bessie Cooper 
        </div>
        <div className='mx-3'>
          <img className='mr-2' src={profileImage} alt='bessie-cooper-profile' />
          <ChevronDown strokeWidth={3} color='black' size={14} />
        </div>
        <div className='mx-3'>
          <Moon stroke='#11263C' strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
