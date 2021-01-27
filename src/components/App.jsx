import React from 'react';
import MainContentArea from './MainContentArea';
import { useMediaQuery } from 'react-responsive';

export default function App (props) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 639px)' });

  return (
    <div className=''>
      <MainContentArea isTabletOrMobile={isTabletOrMobile} />
    </div>
  );
}
