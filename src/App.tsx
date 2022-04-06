import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
