import { useEffect } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage";
import Profile from "./pages/profile/Profile";
import TasksDetailPage from "./pages/tasks/TasksDetailPage";
import TasksPage from "./pages/tasks/TasksPage";

function AppRoutingOne() {

  let logged = false;

/*   let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    }
  ] */

  useEffect(() => {
    logged = localStorage.getItem('credentials');
  }, []);

  return (
    <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/login">| LOGIN |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/faqs">| FAQs ||</Link>
        </aside>
      <main>
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path='/login' element={logged ? <Navigate replace to='/' /> : <LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faqs' element={<AboutPage />} />
        <Route path='/profile' element={logged ? <Profile /> : <Navigate replace to='/login' />}>
        </Route>
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/tasks/:id' element={<TasksDetailPage/>} />
        <Route element={ NotFoundPage } />
    </Routes>
      </main>
      </div>
  );
}

export default AppRoutingOne;
