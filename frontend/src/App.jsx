import React from 'react'
import HomePage from "./Home/HomePage"
import InstitutionsPage from "./Institutions/InstitutionsPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StudentLogin from './components/StudentLogin'
import StudentRegister from './components/StudentRegister'
import AdminLogin from './components/AdminLogin'
import AdminRegister from './components/AdminRegister'
import {Toaster} from "react-hot-toast"
import EducationFeesPage from './EducationFees/EducationFeesPage'
import PaymentsPage from "./Payments/PaymentsPage"
import Logout from './components/Logout'
import FeedbackPage from './Feedback/FeedbackPage'
import AboutPage from './About/AboutPage'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/institutions" element={<InstitutionsPage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-registration" element={<StudentRegister />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-registration" element={<AdminRegister />} />
        <Route path='/institute-fees' element={<EducationFeesPage />} />
        <Route path='/student-payments' element={<PaymentsPage />} />
        <Route path='/feedback' element={<FeedbackPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>

    <Toaster />
    </>
  )
}

export default App