import { useEffect } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import RegisterFormik from "./components/pure/forms/RegisterFormik";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import LoginPage from "./pages/auth/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";
import HomePage from "./pages/home/HomePage";
import Profile from "./pages/profile/Profile";
import TasksDetailPage from "./pages/tasks/TasksDetailPage";
import TasksPage from "./pages/tasks/TasksPage";

function AppRoutingFinal() {
  //TODO: Change to value from sessionStorage
  let loggedIn = false;

  return (
    <Routes>
      <Route exact path="" element={ loggedIn ? <Navigate replace to="/dashboard" /> : <LoginPage /> }></Route>
      <Route exact path='/login' element={<LoginPage />} />
      <Route exact path='/register' element={ loggedIn ? <Dashboard /> : <RegisterFormik />} />
      <Route exact path='/dashboard' element={ loggedIn ? <Dashboard /> : <LoginPage /> } />
      <Route element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutingFinal;
