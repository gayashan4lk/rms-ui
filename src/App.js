import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import NameList from './components/nameList';
import UserForm from './components/userForm';
import SideBar from "./components/sideBar";
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
       <NavBar />
       <Routes >
         <Route path="/namelist" element={<NameList/>} />
         <Route path="/userform" element={<UserForm/>} />
       </Routes>
      </BrowserRouter>
      
    </React.Fragment>
  );
}
export default App;
