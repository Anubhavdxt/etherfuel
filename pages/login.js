import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Login from '../components/Login';

const login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-primary via-white to-tertiary">
      <div className="flex h-full items-center justify-center w-3/5">
        <Image
          src="/loginBG.svg"
          width={900}
          height={650}
          alt="Login background"
        />
      </div>
      <div className="h-full w-2/5 flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
};

export default login;
