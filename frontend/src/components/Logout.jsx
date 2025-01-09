import React from 'react'

const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

    window.location.href = "/student-login"
  return (
    <></>
  )
}

export default Logout