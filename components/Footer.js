import react from 'react';

export default function Footer() {
  const myName = 'EtherFuel';
  return (
    <>
      <footer className="flex-1 flex flex-col items-center justify-center border-none text-secondary mx-auto w-full">
        <div
          className="px-48 flex justify-center items-center w-11/12"
          style={{ borderTop: `1.5px solid #1DA868af` }}
        >
          <p className="opacity-80 text-lg my-8 text-secondary">
            copyright © {new Date().getFullYear()} {myName}
          </p>
        </div>
      </footer>
    </>
  );
}
