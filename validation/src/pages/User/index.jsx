import { lazy, useEffect } from "react";
import { Link } from "react-router-dom";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const User = () => {
  useEffect(() => {
    user;
  }, []);

  const user = {
    nama: "Rian",
  };

  return (
    <ContentLayout>
      <div className="flex flex-col items-center justify-center shadow-lg p-5 bg-indigo-600 rounded-lg text-slate-100">
        <span className="text-[25px] font-bold">
          Hello Lord <i>{user.nama}</i>
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
