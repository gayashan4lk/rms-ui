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
      <h1>hello</h1>
      <Link to="/invoices">Invoices</Link>
      <Link to="/expenses">Expenses</Link>
      <Outlet />
    </React.Fragment>
  );
}
export default App;


      {/* <div className="App">
        <div className="wrapper">
          <SideBar />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Switch>
            <Route path="/">

            </Route>
          </Switch>
          <nav id="content">
            <div id="content">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <button id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left"></i>
                    <span>Toggle Sidebar</span>
                  </button>
                </div>
              </nav>
            </div>
            <NavBar data="This is data" />
            <div className="container">
              <div className="row">
                <div className="col">
                <NameList name="Tony Stark" />
                </div>
                <div className="col">
                <UserForm />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div> */}