import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import NameList from './components/nameList';

function App() {
  return (
    <div className="App">
      <NavBar data="This is data" />
      <div>
        <NameList name="Tony Stark" />
      </div>
    </div>
  );
}

export default App;
