import Image from 'next/image';
import Link from 'next/link';
import HeaderMsg from './HeaderMsg';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div>
      <Navbar />
      <HeaderMsg />
      <div className="flex flex-col items-center justify-center py-8 px-12">
        <h1 className="text-8xl text-center font-extrabold leading-normal">
          run your ev with etherfuel
        </h1>
        <h2 className="font-bold text-7xl">
          fuel your electric vehicle with crypto
        </h2>
        <p className="font-bold text-5xl py-6 opacity-90">
          fuel your electric vehicle with crypto
        </p>
        <button className="bg-tertiary text-secondary px-12 py-6 font-semibold text-2xl mt-5">
          <Link href="/login">Get Started</Link>
        </button>
      </div>
      <div className="py-8 flex items-center justify-center flex-col">
        <p className="font-bold text-5xl mb-8 opacity-90">
          Charge your EVs effortlesly leave your concerns to EtherFuel
        </p>
        <Image
          src={'/Background.svg'}
          width={1920}
          height={900}
          alt="Charging station"
        />
      </div>
    </div>
  );
}
