import { lazy } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { handleBlur } from "../../utils/formValidation";
import cats from "../../assets/cats.png";

const Input = lazy(() => import("../../components/input"));
const Label = lazy(() => import("../../components/label"));
const Button = lazy(() => import("../../components/button"));

const Register = () => {
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
        src={cats}
        alt="cats"
        className="w-[50vw] object-cover md:w-[20vw] lg:w-[15vw]"
      />
      <h1 className="font-bold text-lg md:text-base xl:text-lg">Sign up</h1>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Label title="Nama" for="name" />
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Masukan nama"
          message="nama harus diisi"
          register={register}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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
            title="Sign up"
            className="bg-[#D61355] text-white mt-5 w-[25vw] px-[3vw] py-3 hover:bg-[#640928] md:w-[10vw] md:py-1 md:px-2 xl:w-[7vw]"
          />
        </div>
      </form>
      <div className="flex md:mt-2">
        <p className="text-[1rem]">Already have an account?</p>
        <Link to="/login" className="ml-1 text-[#D61355] font-bold text-[1rem]">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Register;
