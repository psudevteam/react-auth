import { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProtectedData, logout } from "../../api";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const User = () => {
  const [name, setName] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await fetchProtectedData();
        console.log(user);
        setName(user);
        if (user) {
          setIsAuth(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  const logoutUser = () => {
    logout();
    navigate("/");
  };

  return (
    <Suspense fallback={<div>Loading</div>}>
      <ContentLayout>
        <div className="flex flex-col items-cente w-[80vw] justify-center items-center shadow-lg p-5 bg-indigo-600 rounded-lg text-slate-100">
          <span className="text-[20px] font-bold">
            {isAuth ? "You are authenticated" : "You are not authenticated "}
          </span>
          <span className="text-[25px] font-bold">
            {isAuth ? `Hello Lord ${name}` : ""}
          </span>
        </div>

        <button
          className="mt-16 bg-yellow-500 w-[16vw] md:w-[12vw] lg:w-[10vw] h-[6vh] rounded-xl font-bold hover:bg-yellow-600 hover:text-white"
          onClick={logoutUser}
        >
          Logout
        </button>
      </ContentLayout>
    </Suspense>
  );
};

export default User;
