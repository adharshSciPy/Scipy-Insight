import React from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import Loader from './scenes/main/Loader';

function App() {

  const loading = useSelector((state) => state.loader.loading)

  return (
    <>
      {/* <LandingPage /> */}
      {/* <Outlet /> */}
      <BrowserRouter>
        {
          loading ? <Loader /> :

            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="login" element={<SignIn />} />
              <Route path="register" element={<SignUp />} />

              {/* admin */}
              <Route path="admin" element={<Dashboard />}>
                <Route path='home' element={<Home />} />
                <Route path='batches' element={<Batches />} >
                  <Route path=':batchId' element={<Batches />} />
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
                <Route path="home" element={<StudentHome />} />
                <Route path="class" element={<StudentClass />} />
                <Route path="profile" element={<StudentProfile />} />
                <Route path="advancedClass" element={<AdvancedClass />} />
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