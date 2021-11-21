import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Layout from './component/layout'
import { SiteProvider } from './context/SiteContext'
import Home from './pages/home';
import Bootcamps from './pages/bootcamps';
import Courses from './pages/courses';
import Reviews from './pages/reviews';
import Users from './pages/users';

const App = () => {
  const site = {
    "name": process.env.REACT_APP_SITE_NAME,
    "description": process.env.REACT_APP_DESCRIPTION,
    "drawer_width": parseInt(process.env.REACT_APP_DRAWER_WIDTH)
  }

  return (
    <SiteProvider value={site}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/bootcamps" element={<Bootcamps />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<>Sorry! 404 not found!</>} />
        <Route path="/user/login" element={<>Suser login</>} />
        <Route path="/user/register"></Route>
        <Route path="/user/detail"></Route>
      </Routes>        
    </SiteProvider>
  );
}

export default App;
