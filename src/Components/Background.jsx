import React from 'react';
import backgroundImage from '../assets/Images/newImge.jpeg';  
import MsgBody from './MsgBody';

const Background = () => {
  return (
    <div
      className="relative h-screen w-full"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <MsgBody />
    </div>
  );
}

export default Background;
``