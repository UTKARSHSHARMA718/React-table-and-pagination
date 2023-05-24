import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SIdeBar';
import NavBar from './Components/Navbar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SideBar/>
      <SearchBar/>
    </div>
  );
}

export default App;
