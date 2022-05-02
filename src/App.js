import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import NameList from './components/nameList';
import UserForm from './components/userForm';

function App() {
  return (
    <BrowserRouter>
      <NavBar data="some data" />
      <Routes>
        <Route path="/namelist" element={<NameList />} />
        <Route path="/userform" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
