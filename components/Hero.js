import HeaderMsg from "./HeaderMsg";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <HeaderMsg />
      <div className="p-12 flex flex-col items-center justify-center">
        <h1 className="text-8xl text-center font-extrabold leading-normal">
          my name is anubhav
          <br />
          <span className="font-bold">i&#39;m a front-end developer</span>
        </h1>
        <p className="font-bold text-4xl py-6 opacity-90">
          i love coding web apps and developing user interfaces
        </p>
        <button className="bg-secondary text-primary px-12 py-6 font-semibold text-2xl mt-5">
          <a
            href="/public/asset/anubhav-cv.pdf"
            download
          >
            Download CV
          </a>
        </button>
      </div>
    </>
  );
}
