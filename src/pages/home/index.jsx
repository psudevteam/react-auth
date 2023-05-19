import hero from "../../assets/hero.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full grid place-items-center mt-[20vh] gap-5">
      <img
        src={hero}
        alt="hero"
        className="w-[30vw] object-cover md:w-[10vw] lg:w-[7vw]"
      />
      <p className="font-bold">Looks like you haven't logged in yet</p>
      <div className="flex gap-3">
        <Link
          to="login"
          className="bg-[#D61355] text-white px-[2vw] py-[1vh] hover:bg-[#640928]"
        >
          Sign in
        </Link>
        <p className="mt-[1vh]">or</p>
        <Link
          to="register"
          className="bg-[#1D267D] text-white px-[2vw] py-[1vh] hover:bg-[#0C134F]"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Home;
