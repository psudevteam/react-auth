import { lazy } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import animals from "../../assets/animals.png";

const Input = lazy(() => import("../../components/input"));
const Label = lazy(() => import("../../components/label"));
const Button = lazy(() => import("../../components/button"));

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="grid place-items-center gap-3 mt-10 md:gap-0">
      <img
        src={animals}
        alt="animals"
        className="w-[50vw] object-cover md:w-[20vw] lg:w-[15vw]"
      />
      <h1 className="font-bold text-lg md:text-base xl:text-lg">Sign in</h1>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Label title="Email" for="email" />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Masukan email"
          register={register}
          message="email harus diisi"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Label title="Password" for="password" />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Masukan password"
          register={register}
          message="password harus diisi"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <div className="flex flex-col items-center">
          <Button
            title="Sign in"
            className="bg-[#1D267D] text-white mt-5 w-[25vw] px-[3vw] py-3 hover:bg-[#0C134F] md:w-[10vw] md:py-1 md:px-2 xl:w-[7vw]"
          />
        </div>
      </form>
      <div className="flex md:mt-2">
        <p className="text-[1rem]">Don't have an account?</p>
        <Link
          to="/register"
          className="ml-1 text-[#1D267D] font-bold text-[1rem]"
        >
          register
        </Link>
      </div>
    </div>
  );
};

export default Login;
