import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InsurancePage from "./pages/InsurancePage.jsx";
import HospitalLogin from "./pages/Hospital/HospitalLogin.jsx";
import FinalPage from "./pages/FinalPage.jsx";
import EnrollPage from "./pages/EnrollPage.jsx";
import SignUpPage from "./pages/user/SignUpPage.jsx";
import SignInPage from "./pages/user/SignInPage.jsx";
import CustomerInfo from "./pages/user/CustomerInfo.jsx";
<<<<<<< HEAD
import CompanyLoginPage from "./pages/insurance/CompanyLogin.jsx";
=======
import CompanyLoginPage from "./pages/Insurance/CompanyLogin.jsx";
import CompanyData from "./pages/Insurance/CompanyData.jsx";
>>>>>>> e416935e6d2a2022c5825a85b16edee00d6911a8

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/insurance",
    element: <InsurancePage />,
  },
  {
    path: "/hospital-login",
    element: <HospitalLogin />,
  },
  {
    path: "/final",
    element: <FinalPage />,
  },
  {
    path: "/enroll",
    element: <EnrollPage />,
  },
  {
    path: "/customerinfo",
    element: <CustomerInfo />,
  },
  {
    path: "/company-login",
    element: <CompanyLoginPage />,
  },
  {
    path: "/companydata",
    element: <CompanyData />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
