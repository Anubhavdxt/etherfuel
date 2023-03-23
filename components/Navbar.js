import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center px-48 text-secondary py-0">
      <div className="logo text-4xl opacity-85 uppercase font-semibold bg">
        <Link href="/">
          <Image
            src="/logo.svg"
            height="180"
            width="180"
            alt="Logo"
          ></Image>
        </Link>
      </div>
      <div className="flex flex-row justify-between items-center lowercase opacity-80 text-2xl">
        <div className="mr-16 link">
          <Link href="#projects">my projects</Link>
        </div>
        <div className="mr-16 link">
          <Link href="#about">about me</Link>
        </div>
        <div className="link">
          <Link href="#contact">smart contract</Link>
        </div>
      </div>
    </nav>
  );
}
