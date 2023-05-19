import { lazy } from "react";

const Router = lazy(() => import("./router"));

export default function App() {
  return (
    <div className="App font-poppins">
      <Router />
    </div>
  );
}
