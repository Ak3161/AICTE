import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import SignInPage from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import Error from '../components/Error'
import Template from '../components/Template'


function AllRoutes() {

  return (
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/auth" element={<Template />} >
          <Route exact path="login" element={<LoginPage />} />
          <Route exact path="signin" element={<SignInPage />} />
        </Route>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Error />} />

      </Routes>
  )
}

export default AllRoutes
