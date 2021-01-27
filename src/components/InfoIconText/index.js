import React from 'react';
import { AlertCircle } from 'react-feather';

export default function InfoIconText ({ text, className = '' }) {
  return (
    <div className={`d-flex align-items-center ${className}`}>
      <p className='mr-2 light-black font-sf-pro font-weight-bold fs-md mb-0'>{text}</p>
      <AlertCircle className='ml-2' size={18} stroke='#D0D1D2' strokeWidth='1.5px' />
    </div>
  );
}