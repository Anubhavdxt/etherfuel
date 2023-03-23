import React from 'react';
import Image from 'next/image';

export default function TechUsed() {
  return (
    <div className="py-8 flex items-center justify-center flex-col">
      <p className="font-medium text-4xl mb-8 opacity-90">
        Tech stacks are used keeping your security & reliability in mind
      </p>
      <div className="flex justify-between items-center p-10 gap-x-10">
        <Image
          src={'/github.svg'}
          width={100}
          height={100}
          alt="github"
        />
        <Image
          src={'/Alchemy.svg'}
          width={100}
          height={100}
          alt="Alchemy"
        />
        <Image
          src={'/next.svg'}
          width={100}
          height={100}
          alt="next"
        />
        <Image
          src={'/Hardhat.svg'}
          width={100}
          height={100}
          alt="Hardhat"
        />
        <Image
          src={'/polygon.svg'}
          width={100}
          height={100}
          alt="polygon"
        />
        <Image
          src={'/ethereum.svg'}
          width={100}
          height={100}
          alt="ethereum"
        />
        <Image
          src={'/solidity.svg'}
          width={100}
          height={100}
          alt="solidity"
        />
        <Image
          src={'/Vercel.svg'}
          width={100}
          height={100}
          alt="Vercel"
        />
      </div>
    </div>
  );
}
