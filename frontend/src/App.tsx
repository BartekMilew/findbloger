import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderApp from './components/HeaderApp/HeaderApp';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
