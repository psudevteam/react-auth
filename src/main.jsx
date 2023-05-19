import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
const Loading = lazy(() => import("./components/loading"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback="Error happens">
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
