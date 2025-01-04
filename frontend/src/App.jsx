import React from 'react'
import HomePage from "./Home/HomePage"
import InstitutionsPage from "./Institutions/InstitutionsPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/institutions" element={<InstitutionsPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App