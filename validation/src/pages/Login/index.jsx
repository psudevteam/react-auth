import { lazy, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://go-sample-backend-production.up.railway.app/api/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      setIsLoading(false);
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentLayout>
      <div className="flex flex-col w-[80vw] md:w-[50vw] h-[60vh] shadow-md shadow-slate-400 rounded-lg items-center justify-center">
        <h1 className="font-bold uppercase">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-5"
        >
          {/* EMAIL */}
          <div className="flex flex-col font-semibold">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="masukan email"
              className={`border-2 w-[55vw] md:w-[35vw] lg:w-[30vw] p-2 rounded-sm hover:border-black ${
                errors.email
                  ? "border-red-600 bg-red-200 hover:border-red-400"
                  : "border-slate-500"
              }`}
              {...register("email", {
                required: "email harus diisi",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "kesalahan berpikir",
                },
              })}
            />
            {errors.email && (
              <span className="animate-pulse text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col font-semibold">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="masukan password"
              className={`border-2  w-[55vw] md:w-[35vw] lg:w-[30vw] p-2 rounded-sm hover:border-black ${
                errors.password
                  ? "border-red-600 bg-red-200 hover:border-red-400"
                  : "border-slate-500"
              } `}
              {...register("password", {
                required: "password harus diisi",
                minLength: {
                  value: 8,
                  message: "password minimal 8 digit",
                },
              })}
            />
            {errors.password && (
              <span className="animate-pulse text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`text-[17px] font-semibold rounded-2xl bg-green-400  
            h-[6vh] w-[18vw] md:w-[14vw] lg:w-[10vw] mt-5 mx-auto ${
              isLoading
                ? "cursor-not-allowed bg-green-200 text-slate-500"
                : "hover:bg-green-500 hover:text-slate-100"
            } `}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>

        <span className="mt-2">
          Register di{" "}
          <Link to="/register" className="text-sm font-bold hover:underline">
            sini
          </Link>
          !
        </span>
      </div>
    </ContentLayout>
  );
};

export default Login;
