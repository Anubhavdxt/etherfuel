import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center px-48 py-20 text-secondary">
      <div className="logo text-4xl opacity-85 uppercase font-semibold">
        <Link href="/">Anubhav</Link>
      </div>
      <div className="flex flex-row justify-between items-center lowercase opacity-80 text-2xl">
        <div className="mr-16 hover:text-tertiary">
          <Link href="#projects">projects</Link>
        </div>
        <div className="mr-16 hover:text-tertiary">
          <Link href="#about">about</Link>
        </div>
        <div className="hover:text-tertiary">
          <Link href="#contact">contact me</Link>
        </div>
      </div>
    </nav>
  );
}
