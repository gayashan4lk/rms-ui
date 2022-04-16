import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import NameList from './components/nameList';
import UserForm from './components/userForm';
import SideBar from "./components/sideBar";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <SideBar />
        <nav id="content">
          {/* <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button id="sidebarCollapse" className="btn btn-info">
                  <i className="fas fa-align-left"></i>
                  <span>Toggle Sidebar</span>
                </button>
              </div>
            </nav>
          </div> */}
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
    </div>
  );
}

export default App;
