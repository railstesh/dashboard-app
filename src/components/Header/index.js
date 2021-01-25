import React from 'react';
import search from '../../assets/icons/search.png';
import profileImage from '../../assets/icons/Rectangle 6.png';
import halfMoon from '../../assets/icons/half-moon.png';

export default function Header () {
  return (
    <div className='px-4 py-4 bg-white d-flex justify-content-between w-100 border-gray-light border-bottom'>
      <div className='d-flex justify-content-between fs-base font-weight-bold align-items-center'>
        <div className='mx-4 light-black'>Dashboard</div>
        <div className='mx-4 gray-50'>Advanced Quarry</div>
        <div className='mx-4 gray-50'>Events</div>
        <img className='mx-4 gray-50 search-icons' src={search} alt='search-icon' />
      </div>
      <div className='d-flex justify-content-between light-black fs-md font-sf-pro font-weight-bold align-items-center'>
        <div className='mx-3'>
          Bessie Cooper 
        </div>
        <div className='mx-3'>
          <img className='' src={profileImage} alt='bessie-cooper-profile' />
        </div>
        <div className='mx-3'>
          <img className='' src={halfMoon} alt='' />
        </div>
      </div>
    </div>
  );
}
