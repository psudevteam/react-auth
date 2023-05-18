import { lazy } from "react";

const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const Error = () => {
  return (
    <ContentLayout>
      <div className="flex items-center gap-8 mt-[30vh] font-bold">
        <div className="text-4xl animate-spin"> + </div>
        <div className="text-4xl animate-spin"> + </div>
        <span className="text-red-600 font-semibold text-6xl">Error 404</span>
        <div className="text-4xl animate-spin"> + </div>
        <div className="text-4xl animate-spin"> + </div>
      </div>
      <span className="font-bold mt-4 animate-bounce text-xl">Skill Issue</span>
    </ContentLayout>
  );
};

export default Error;
