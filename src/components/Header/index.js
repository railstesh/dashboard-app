import React from 'react';
import profileImage from '../../assets/icons/Rectangle 6.png';
import { ChevronDown, Moon, Search } from 'react-feather';

export default function Header () {
  return (
    <div className='bg-white d-flex d-sm-none d-lg-flex justify-content-start justify-content-lg-between w-100 border-gray-light border-bottom'>
      <div className='p-2 p-sm-4 d-sm-flex justify-content-between fs-base font-weight-bold align-items-center'>
        <div className='mx-md-4 mx-2 light-black'>Dashboard</div>
        <div className='mx-md-4 mx-2 gray-50'>Advanced Quarry</div>
        <div className='mx-md-4 mx-2 gray-50'>Events</div>
        <Search className='mx-md-4 mx-2 gray-50 search-icons' />
      </div>
      <div className='p-2 p-sm-4 d-flex justify-content-lg-between justify-content-end  light-black fs-md font-sf-pro font-weight-bold align-items-sm-center text-center text-sm-left'>
        <div className='mx-md-3 mx-1'>
          Bessie Cooper 
        </div>
        <div className='mx-md-3 mx-1'>
          <img className='mr-2' src={profileImage} alt='bessie-cooper-profile' />
          <ChevronDown strokeWidth={3} color='black' size={14} />
        </div>
        <div className='mx-md-3 mx-1'>
          <Moon stroke='#11263C' strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
