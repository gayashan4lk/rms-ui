import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import NameList from './components/nameList';
import UserForm from './components/userForm';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
