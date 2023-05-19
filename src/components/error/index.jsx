import svg from "../../assets/error.svg";

const Error = () => {
  return (
    <div className="flex flex-col text-center h-screen justify-center items-center">
      <img
        src={svg}
        alt="hmm..."
        className="w-[20vw] pl-[2vw] animate-bounce md:w-[10vw]"
      />
      <div className="md:flex md:gap-2 items-center">
        <h1 className="font-bold text-[3rem] md:text-[2rem]">404</h1>
        <div className="text-slate-500 hidden md:flex">|</div>
        <p className="">This page could not be found.</p>
      </div>
    </div>
  );
};

export default Error;
