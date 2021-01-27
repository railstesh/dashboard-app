import React from 'react';
import InfoIconText from '../InfoIconText';
import superiorityImage from '../../assets/icons/right_side_bar.png';
import { Link } from 'react-feather';
import google from '../../assets/icons/google.png';
import foursquare from '../../assets/icons/foursquare.png';
import talk from '../../assets/icons/talk.png';
import income from '../../assets/icons/income.png';
import kickStart from '../../assets/icons/Kickstarter.png';

export default function RightSideBar () {
  return (
    <div className='right-side-container col-md-3 col-12'>
      <div className='text-lg-left text-center'>
        <InfoIconText text='Superiority' />
        <div className='mt-3 mb-2'>
          <img src={superiorityImage} alt='superiority' className='w-100'/>
        </div>
        <div className='d-flex mb-3'>
          <Link size={17} className='stroke-light-violet mr-1' />
          <p className='mb-0 light-violet fs-base-sm'>Social Trading Plateform</p>
        </div>
        <div className='py-2 fs-base-sm rounded-sm shadow bg-white'>
          <div className='my-2 d-lg-flex justify-content-around'>
            <img src={google} alt='google' className='right-side-trading-icons'/>
            <div className='border-bottom border-gray-lighter pb-3'>
              <p className='mb-0 my-1 gray-50 font-weight-normal'>Stock trading</p>
              <p className='mb-0 light-black font-weight-bold'>Google</p>
            </div>
          </div>
          <div className='my-2 d-lg-flex justify-content-around'>
            <img alt='' src={foursquare} className='right-side-trading-icons' />
            <div className='border-bottom border-gray-lighter pb-3'>
              <p className='mb-0 my-1 gray-50 font-weight-normal'>Stock trading</p>
              <p className='mb-0 light-black font-weight-bold'>Foursquare</p>
            </div>
          </div>
          <div className='my-2 d-lg-flex justify-content-around'>
            <img alt='' src={kickStart} className='right-side-trading-icons' />
            <div className='border-bottom border-gray-lighter pb-3'>
              <p className='mb-0 my-1 gray-50 font-weight-normal'>Stock trading</p>
              <p className='mb-0 light-black font-weight-bold'>Kickstarter</p>
            </div>
          </div>
          <div className='my-2 d-lg-flex justify-content-around'>
            <img alt='' src={talk} className='right-side-trading-icons' />
            <div className='border-bottom border-gray-lighter pb-3'>
              <p className='mb-0 my-1 gray-50 font-weight-normal'>Stock trading</p>
              <p className='mb-0 light-black font-weight-bold'>Google</p>
            </div>
          </div>
        </div>
        <div className='my-2 mt-5'>
          <InfoIconText text='My Income' />
          <div className='text-center rounded-lg shadow my-2 bg-white p-2 p-lg-4 d-xl-flex justify-content-between align-items-center'>
            <img src={income} alt='' className='' />
            <p className='pb-0 mb-0 fs-base light-gray'>Legend</p>
            <p className='pb-0 mb-0 font-sf-pro fs-base-sm light-violet'>+25%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
