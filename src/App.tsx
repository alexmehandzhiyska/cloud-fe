import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
