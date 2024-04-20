import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserPage from "./pages/UserPage.jsx";
import InsurancePage from "./pages/InsurancePage.jsx";
import HospitalPage from "./pages/HospitalPage.jsx";
import FinalPage from "./pages/FinalPage.jsx";
import EnrollPage from "./pages/EnrollPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/insurance",
    element: <InsurancePage />,
  },
  {
    path: "/hospital",
    element: <HospitalPage />,
  },
  {
    path: "/final",
    element: <FinalPage />,
  },
  {
    path: "/enroll",
    element: <EnrollPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
