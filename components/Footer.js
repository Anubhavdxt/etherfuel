import react from "react";

export default function Footer() {
  const myName = "Anubhav";
  return (
    <>
      <footer className="flex-1 flex flex-col items-center justify-center border-none text-secondary mx-auto w-full">
        <hr className="w-11/12 opacity-60"/>
        <p className="opacity-80 text-xl my-8 text-secondary">
          copyright © {new Date().getFullYear()} {myName}
        </p>
      </footer>
    </>
  );
}
