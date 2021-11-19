import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Layout from './component/layout'
import { SiteProvider } from './context/SiteContext'
import Home from './routes/Home';
import Users from './routes/Users';

const App = () => {
  const site = {
    "name": process.env.REACT_APP_SITE_NAME,
    "description": process.env.REACT_APP_DESCRIPTION,
    "drawer_width": parseInt(process.env.REACT_APP_DRAWER_WIDTH)
  }

  return (
    <SiteProvider value={site}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
        </Routes>        
      </Layout>
    </SiteProvider>
  );
}

export default App;
