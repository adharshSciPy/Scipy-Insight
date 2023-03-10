import React, { useState, useEffect } from 'react';
import SignIn from './scenes/main/SignIn'
import SignUp from './scenes/main/SignUp'
import Dashboard from './scenes/admin/Dashboard'
import Batch from './scenes/admin/Batch';
import Batches from './scenes/admin/Batches'
import Student from './scenes/admin/Student';
import Teacher from './scenes/admin/Teacher';
import Teachers from './scenes/admin/Teachers';
import Students from './scenes/admin/Students';
import Home from './scenes/admin/Home';
import StudentHome from './scenes/student/Home';
import TeacherHome from './scenes/teacher/Home';
import TeacherBatch from './scenes/teacher/Batches';
import StudentClass from './scenes/student/Class'
import StudentNav from './scenes/student/Navbar'
import LandingPage from './scenes/main/LandingPage';
import StudentProfile from './scenes/student/Profile'
import AdvancedClass from './scenes/student/AdvancedClass'
import { Outlet } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { setLoading } from './store/loader';
import Loader from './scenes/main/Loader';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

import { loggeduser, isConnected, isNotConnected, loginRole } from './store/loginedUserSlice';

import ProtectedRoute from './component/ProtectedRoute';
import ForceRedirect from './component/ForceRedirect';
import Error from './scenes/main/Error'
import Snackbar from './scenes/main/Snackbar';

function App() {
  // const [isConnected, setIsconnected] = useState(false);
  const dispatch = useDispatch()
  const active = useSelector((state) => state.loginedUser.isConnected)

  const checkUserToken = () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user-token"));
      if (user) {
        const data = { token: user }
        const verifyUser = async () => {
          axios
            .post("http://localhost:5000/user/auth", data)
            .then((response) => {
              const X = response.data;
              // Save token to localStorage
              dispatch(loggeduser(X._id))
              dispatch(loginRole(X.role))
              // console.log(X.role)
              // setIsconnected(true);
              dispatch(isConnected())
            })
            .catch((err) => {
              console.log(err.response.data)
              localStorage.clear();
            });
        }
        verifyUser();
      } else {
        // setIsconnected(false);
        dispatch(isNotConnected())
      }
    }
  };
  useEffect(() => {
    checkUserToken();
  }, [active]);

  const Logout = () => {
    if (localStorage.getItem("user-token")) {
      localStorage.clear();
      // s
    }
  };


  const loading = useSelector((state) => state.loader.loading)

  return (
    <>
      {/* <LandingPage /> */}
      {/* <Outlet /> */}
      <BrowserRouter>
        <Snackbar />
        {
          loading ? <Loader /> :
            <Routes>
              <Route path="*" element={<Error />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="login" element={<ForceRedirect user={active}><SignIn /></ForceRedirect>} />
              <Route path="register" element={<SignUp />} />


              {/* admin */}
              <Route path="admin" element={<Dashboard />}>
                <Route path='home' element={<Home />} />
                <Route path='batches' element={<Batches />} >
                  <Route path=':batchId' element={<Batch />} />
                </Route>

                <Route path='students' element={<Students />} >
                  <Route path=':studentId' element={<Student />} />
                </Route>

                <Route path='teachers' element={<Teachers />} >
                  <Route path=':teacherId' element={<Teacher />} />
                </Route>
              </Route>


              {/* student */}
              <Route path="student" element={<StudentNav />}>
                <Route path="home" element={<ProtectedRoute user={active}> <StudentHome /> </ProtectedRoute>} />
                <Route path="class" element={<ProtectedRoute user={active}> <StudentClass /></ProtectedRoute>} />
                <Route path="profile" element={<ProtectedRoute user={active}> <StudentProfile /></ProtectedRoute>} />
                <Route path="advancedClass" element={<ProtectedRoute user={active}> <AdvancedClass /></ProtectedRoute>} />
              </Route>


              {/* teacher */}
              <Route path="teacher">
                <Route index element={<TeacherHome />} />
                <Route path="batches" element={<TeacherBatch />} />
              </Route>
            </Routes>
        }
      </BrowserRouter>
    </>
  )
}

export default App