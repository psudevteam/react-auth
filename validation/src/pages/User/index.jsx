import { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const User = () => {
  useEffect(() => {
    // const token = localStorage.getItem("token");
    // console.log(token);
    // setAuthToken(token);
    getUser();
  }, []);

  // const setAuthToken = (token) => {
  //   if (token) {
  //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //   } else {
  //     delete axios.defaults.headers.common["Authorization"];
  //   }
  // };

  const [name, setName] = useState("");

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://go-sample-backend-production.up.railway.app/api/user",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.user);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <ContentLayout>
      <div className="flex flex-col items-center justify-center shadow-lg p-5 bg-indigo-600 rounded-lg text-slate-100">
        <span className="text-[25px] font-bold">
          Hello Lord <i>{}</i>
        </span>
        <span className="text-[20px] font-bold">
          Selamat kamu telah melewati kasta sepuh
        </span>
      </div>
      <Link to="/">
        <button className="mt-16 bg-yellow-500 w-[16vw] md:w-[12vw] lg:w-[10vw] h-[6vh] rounded-xl font-bold hover:bg-yellow-600 hover:text-white">
          Logout
        </button>
      </Link>
    </ContentLayout>
  );
};

export default User;
