import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="header">
      <Image src="/images/logo.svg" alt="logo" width="105px" height="65px" />
    </div>
  );
};

export default Header;
